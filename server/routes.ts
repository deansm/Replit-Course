import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Appointment routes
  
  // Create a new appointment
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      res.json(appointment);
    } catch (error: any) {
      console.error("Error creating appointment:", error);
      res.status(400).json({ error: error.message || "Failed to create appointment" });
    }
  });

  // Get all appointments (or by user ID if userId query param is provided)
  app.get("/api/appointments", async (req, res) => {
    try {
      const userId = req.query.userId as string;
      
      if (userId) {
        const appointments = await storage.getAppointmentsByUserId(userId);
        res.json(appointments);
      } else {
        const appointments = await storage.getAllAppointments();
        res.json(appointments);
      }
    } catch (error: any) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: error.message || "Failed to fetch appointments" });
    }
  });

  // Get a specific appointment by ID
  app.get("/api/appointments/:id", async (req, res) => {
    try {
      const appointment = await storage.getAppointmentById(req.params.id);
      
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }
      
      res.json(appointment);
    } catch (error: any) {
      console.error("Error fetching appointment:", error);
      res.status(500).json({ error: error.message || "Failed to fetch appointment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
