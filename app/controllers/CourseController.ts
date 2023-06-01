import { Course } from '../models/Course';
import express from 'express';

// Classe com os métodos CRUD
export class CourseController {

  constructor(private app: express.Application) {}

  async createCourse(req: express.Request, res: express.Response) {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  }

  async getCourse(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const course = await Course.findById(id);
    if (!course) {
      res.status(404).send('Curso não encontrado');
    } else {
      res.json(course);
    }
  }

  async updateCourse(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const course = await Course.findById(id);
    if (!course) {
      res.status(404).send('Curso não encontrado');
    } else {
      await course.updateOne(req.body);
      res.json(course);
    }
  }

async deleteCourse(req: express.Request, res: express.Response) {
    const id = req.params.id;
    const course = await Course.findById(id);
    if (!course) {
      res.status(404).send('Curso não encontrado');
    } else {
      await course.deleteOne();
      res.status(200).send('Curso deletado');
    }
  }
}
