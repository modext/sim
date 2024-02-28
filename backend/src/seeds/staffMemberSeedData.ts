import StaffMember from '../models/staffMembers';

export const seedStaffMembers = async () => {
  try {
    await StaffMember.insertMany([
      { id: 1, name: 'Melinda Patterson' },
      { id: 2, name: 'Jeffrey Henson' },
      { id: 3, name: 'Brittany Jones' },
      { id: 4, name: 'Shannon Singleton' },
      { id: 5, name: 'Tyler Williams' },
      { id: 6, name: 'Catherine Davis' },
      { id: 7, name: 'Lori Walsh' },
      { id: 8, name: 'Jennifer Ortega' },
      { id: 9, name: 'Tammy White' },
      { id: 10, name: 'Robert Grant' }
    ]
    );
    console.log('Staff members seeded successfully');
  } catch (err) {
    console.error('Error seeding staff members:', err);
  }
};
