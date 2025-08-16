# DocPrompt

# 📖 DocPrompt  

DocPrompt is a **base model for a full-stack healthcare appointment booking platform** that connects patients with doctors.  
It currently provides three separate interfaces:  

- 🧑‍⚕️ **Patient App** – Book appointments, manage profile, and view appointments.  
- 👨‍⚕️ **Doctor App** – Manage schedules, appointments, and profile.  
- 🛠 **Admin Dashboard** – Oversee platform activity, manage doctors, patients, and profiles.  

---

## 🚀 Features (Current)  

### Patient Side
- Register/Login securely.  
- Manage personal profile.  
- Book and cancel appointments.  
- View list of own appointments.  

### Doctor Side
- Register/Login securely.  
- Manage personal profile.  
- Set availability and schedules.  
- View list of upcoming appointments.  

### Admin Side
- Secure login for admins.  
- Manage doctors and patients.  
- Approve/reject doctor registrations.  
- Monitor all appointments and accounts.  
- Admin profile management.  

⚠️ **Note:** Search & advanced discovery features are not available yet — this is the **base model**, and development is ongoing.  

---

## 🏗️ Project Structure  


## 🖥️ Internal Working (Overall)

DocPrompt is built around three main roles – **Patient, Doctor, and Admin**.  
All roles are connected through a **Node.js/Express backend** with **MongoDB** as the database.

- **Authentication:**  
  Every user (patient, doctor, admin) signs up and logs in. Passwords are secured, and users get a token to access the system.

- **Patient Flow:**  
  Patients can manage their profile, book appointments with doctors, and view their bookings.

- **Doctor Flow:**  
  Doctors manage their profile, set availability, and see appointments booked by patients. Doctors need admin approval before becoming active.

- **Admin Flow:**  
  The admin approves or rejects doctors, manages all users, and monitors appointments.  

- **Appointments:**  
  When a patient books an appointment, it is linked to both the patient and the doctor, so each side can see it.

- **Profiles:**  
  Every role (Patient, Doctor, Admin) has profile management to update personal details.

Currently, this is the **base model** – advanced features like search, payments, and notifications will be added in the future.
