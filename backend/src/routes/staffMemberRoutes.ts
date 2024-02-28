import express, { Request, Response } from 'express';
import StaffMember, { IStaffMember } from '../models/staffMembers';

const router = express.Router();

// Error handling middleware
const errorHandler = (err: any, req: Request, res: Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};

// Create a staff member
router.post('/', async (req: Request, res: Response) => {
  try {
    const staffMember: IStaffMember = await StaffMember.create(req.body);
    res.status(201).json(staffMember);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get all staff members
router.get('/', async (req: Request, res: Response) => {
  try {
    const staffMembers: IStaffMember[] = await StaffMember.find();
    res.json(staffMembers);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single staff member by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const staffMember: IStaffMember | null = await StaffMember.findById(req.params.id);
    if (!staffMember) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json(staffMember);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Update a staff member
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const staffMember: IStaffMember | null = await StaffMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!staffMember) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json(staffMember);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a staff member
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const staffMember: IStaffMember | null = await StaffMember.findByIdAndDelete(req.params.id);
    if (!staffMember) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json({ message: 'Staff member deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Error handling
router.use(errorHandler);

export default router;
