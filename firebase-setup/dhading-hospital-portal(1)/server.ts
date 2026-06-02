import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Maximize payload size for image data and media updates
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // API to retrieve active serialized DB state
  app.get("/api/get-data", (req, res) => {
    try {
      const jsonPath = path.join(process.cwd(), 'src', 'hospital_data.json');
      if (fs.existsSync(jsonPath)) {
        const data = fs.readFileSync(jsonPath, 'utf-8');
        return res.status(200).json(JSON.parse(data));
      }
    } catch (err: any) {
      console.error("Error reading hospital_data.json, falling back: ", err);
    }
    return res.status(200).json({ fallback: true });
  });

  // API to append a live booking on server for administrative review
  app.post("/api/add-booking", (req, res) => {
    try {
      const newBooking = req.body;
      const jsonPath = path.join(process.cwd(), 'src', 'hospital_data.json');
      let currentData: any = {};
      
      if (fs.existsSync(jsonPath)) {
        try {
          currentData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        } catch (je) {
          console.error("Malformed hospital_data.json, resetting: ", je);
        }
      }
      
      if (!currentData.bookings) {
        currentData.bookings = [];
      }
      
      currentData.bookings.unshift(newBooking);
      fs.writeFileSync(jsonPath, JSON.stringify(currentData, null, 2), 'utf-8');
      
      console.log('Appended incoming mobile appointment booking successfully!');
      return res.status(200).json({ success: true, bookingCount: currentData.bookings.length });
    } catch (err: any) {
      console.error("Error appending booking on server:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // API to permanently save localized browser edits directly into seedData.ts
  app.post("/api/save-seed-data", (req, res) => {
    try {
      const {
        categories,
        services,
        doctors,
        aboutUs,
        patientData,
        visitorData,
        gallery,
        videos,
        news,
        priceList,
        contact,
        settings,
        bookings,
        testimonials,
        events,
        qrCodes,
        machines
      } = req.body;

      // Also save to a JSON database file for fast server retrieval
      const jsonPath = path.join(process.cwd(), 'src', 'hospital_data.json');
      fs.writeFileSync(jsonPath, JSON.stringify(req.body, null, 2), 'utf-8');
      console.log('Successfully saved current data to hospital_data.json:', jsonPath);

      const code = `// This file is auto-generated or modified by Admin Panel Save Action.
// It serves as the fallback initial/seed data for the Dhading Hospital application.

import {
  Services,
  Doctor,
  AboutUs,
  ForPatient,
  ForVisitors,
  GalleryItem,
  VideoItem,
  NewsItem,
  PriceListItem,
  ContactUsInfo,
  WebSettings,
  BookingRequest,
  TestimonialItem,
  HospitalEventItem,
  QRCodeItem,
  MachineItem
} from './types';

export const INITIAL_CATEGORIES: string[] = ${JSON.stringify(categories || [], null, 2)};

export const INITIAL_SERVICES: Services = ${JSON.stringify(services || {}, null, 2)};

export const INITIAL_DOCTORS: Doctor[] = ${JSON.stringify(doctors || [], null, 2)};

export const INITIAL_ABOUT_US: AboutUs = ${JSON.stringify(aboutUs || {}, null, 2)};

export const INITIAL_FOR_PATIENT: ForPatient = ${JSON.stringify(patientData || {}, null, 2)};

export const INITIAL_FOR_VISITORS: ForVisitors = ${JSON.stringify(visitorData || {}, null, 2)};

export const INITIAL_GALLERY: GalleryItem[] = ${JSON.stringify(gallery || [], null, 2)};

export const INITIAL_VIDEOS: VideoItem[] = ${JSON.stringify(videos || [], null, 2)};

export const INITIAL_NEWS: NewsItem[] = ${JSON.stringify(news || [], null, 2)};

export const INITIAL_PRICE_LIST: PriceListItem[] = ${JSON.stringify(priceList || [], null, 2)};

export const INITIAL_CONTACT: ContactUsInfo = ${JSON.stringify(contact || {}, null, 2)};

export const INITIAL_SETTINGS: WebSettings = ${JSON.stringify(settings || {}, null, 2)};

export const INITIAL_BOOKINGS: BookingRequest[] = ${JSON.stringify(bookings || [], null, 2)};

export const INITIAL_TESTIMONIALS: TestimonialItem[] = ${JSON.stringify(testimonials || [], null, 2)};

export const INITIAL_EVENTS: HospitalEventItem[] = ${JSON.stringify(events || [], null, 2)};

export const INITIAL_QR_CODES: QRCodeItem[] = ${JSON.stringify(qrCodes || [], null, 2)};

export const INITIAL_MACHINES: MachineItem[] = ${JSON.stringify(machines || [], null, 2)};
`;

      const targetPath = path.join(process.cwd(), 'src', 'seedData.ts');
      fs.writeFileSync(targetPath, code, 'utf-8');
      console.log('Successfully saved current data to filesystem:', targetPath);

      return res.status(200).json({ success: true, message: 'All changes permanently written to project files on the server!' });
    } catch (err: any) {
      console.error('Error saving seed data:', err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // Serve static assets or mount Vite dev middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
