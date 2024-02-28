import StaffMember from '../models/staffMembers';

export const seedStaffMembers = async () => {
  try {
    await StaffMember.insertMany([
      { name: 'John Doe' },
      { name: 'Jane Smith' },
      // Add more sample staff members as needed
    ]);
    console.log('Staff members seeded successfully');
  } catch (err) {
    console.error('Error seeding staff members:', err);
  }
};
