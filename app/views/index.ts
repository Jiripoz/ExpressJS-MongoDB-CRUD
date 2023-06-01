import { CourseController } from '../controllers/CourseController';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Função para conectar na database
const connectDB = async () => {
  
  try {
    await mongoose.connect('mongodb://mongodb:27017/alan-cursos');
    
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connectDB();

// Inicializa nosso express.js e o controller
const app = express();
const courseController = new CourseController(app);

// Atribui os métodos do controller aos métodos de requisição
app.use(bodyParser.json());
app.get('/courses', courseController.getCourse);
app.post('/courses', courseController.createCourse);
app.get('/courses/:id', courseController.getCourse);
app.put('/courses/:id', courseController.updateCourse);
app.delete('/courses/:id', courseController.deleteCourse);

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
