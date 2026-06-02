var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "50mb" }));
  app.use(import_express.default.urlencoded({ limit: "50mb", extended: true }));
  app.get("/api/get-data", (req, res) => {
    try {
      const jsonPath = import_path.default.join(process.cwd(), "src", "hospital_data.json");
      if (import_fs.default.existsSync(jsonPath)) {
        const data = import_fs.default.readFileSync(jsonPath, "utf-8");
        return res.status(200).json(JSON.parse(data));
      }
    } catch (err) {
      console.error("Error reading hospital_data.json, falling back: ", err);
    }
    return res.status(200).json({ fallback: true });
  });
  app.post("/api/add-booking", (req, res) => {
    try {
      const newBooking = req.body;
      const jsonPath = import_path.default.join(process.cwd(), "src", "hospital_data.json");
      let currentData = {};
      if (import_fs.default.existsSync(jsonPath)) {
        try {
          currentData = JSON.parse(import_fs.default.readFileSync(jsonPath, "utf-8"));
        } catch (je) {
          console.error("Malformed hospital_data.json, resetting: ", je);
        }
      }
      if (!currentData.bookings) {
        currentData.bookings = [];
      }
      currentData.bookings.unshift(newBooking);
      import_fs.default.writeFileSync(jsonPath, JSON.stringify(currentData, null, 2), "utf-8");
      console.log("Appended incoming mobile appointment booking successfully!");
      return res.status(200).json({ success: true, bookingCount: currentData.bookings.length });
    } catch (err) {
      console.error("Error appending booking on server:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });
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
      const jsonPath = import_path.default.join(process.cwd(), "src", "hospital_data.json");
      import_fs.default.writeFileSync(jsonPath, JSON.stringify(req.body, null, 2), "utf-8");
      console.log("Successfully saved current data to hospital_data.json:", jsonPath);
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
      const targetPath = import_path.default.join(process.cwd(), "src", "seedData.ts");
      import_fs.default.writeFileSync(targetPath, code, "utf-8");
      console.log("Successfully saved current data to filesystem:", targetPath);
      return res.status(200).json({ success: true, message: "All changes permanently written to project files on the server!" });
    } catch (err) {
      console.error("Error saving seed data:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
