import express, { Request, Response } from 'express';
import Product, { IProduct } from '../models/product'; // Assuming you have an interface IProduct for Product model

const router = express.Router();

// Create a product
router.post('/', async (req: Request, res: Response) => {
  try {
    const product: IProduct = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get all products
router.get('/', async (_req: Request, res: Response) => {
  try {
    const products: IProduct[] = await Product.find();
    res.json(products);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single product by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product: IProduct | null = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Update a product
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const product: IProduct | null = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a product
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const product: IProduct | null = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
