# Student Dashboard – Final Web Development Assignment  
A fully responsive and interactive **Student Dashboard** built using **React**, **Tailwind CSS**, and **Chart.js**.  
This dashboard includes a functional sidebar, summary cards, attendance analytics, dark mode, and more.

---

## **Project Overview**

This project is designed as part of the *Full Stack Final Assignment*, showcasing:
- Frontend development skills  
- UI/UX implementation  
- Component-based architecture in React  
- Data visualization with Chart.js  
- State management using React hooks  
- Responsive and modern styling with TailwindCSS  

The dashboard is suitable for students to view their:
- Attendance  
- CGPA  
- Credits earned  
- Exams cleared  
- Attendance trend  
- Upcoming events

The UI supports **Dark Mode**, **Sidebar Navigation**, and **Real-time Clock**.

---

## **Features Implemented**

###  1. Modern UI/UX  
- Gradient header  
- Animated cards  
- Rounded surfaces + smooth shadows  
- Responsive layout  

###  2. Functional Sidebar Navigation  
Pages included:
- **Home** (Dashboard)
- **Courses**
- **Profile**
- **Settings**

Each sidebar button switches the current page using React State (`activePage`).

###  3. Summary Cards  
Dashboard displays:
- Attendance %
- CGPA
- Credits Earned
- Exams Cleared  
Each card uses an icon + gradient badge + hover animation.

###  4. Attendance Trend Chart  
Powered by **Chart.js**:
- Smooth curves  
- Gradient area  
- Responsive  
- Updated styles for dark mode  

###  5. Upcoming Events Section  
A visually clean list of:
- Seminars  
- Exams  
- Reviews  
- Holidays  

With icons + hover effects.

###  6. Dark Mode 
Toggle between **Light Mode** and **Dark Mode**.

###  7. Real-Time Clock ⏱  
Auto-updates every second using `setInterval`.

---

## **Tech Stack Used**

Technology                     | Purpose 
**React.js**                   | Component-based UI 
**Tailwind CSS v3**            | Styling & responsiveness 
**Chart.js + react-chartjs-2** | Graph visualization  **React Icons**                | UI icons 
**JavaScript (ES6+)**          | Functionality 

---

## **Project Structure**

```
student-dashboard/
│
├── public/  
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── Profile_Photo_icon.jpg
│   │
│   ├── components/
│   │   ├── Header.js
│   │   ├── Sidebar.js
│   │   ├── SummaryCard.js
│   │   ├── SummarySection.js
│   │   ├── AttendanceChart.js
│   │   └── EventsList.js
│   │
│   ├── data/
│   │   └── events.js
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## **How to Run the Project**

### 1️⃣ Install dependencies
```
npm install
```

### 2️⃣ Start development server
```
npm start
```

### 3️⃣ Open in browser
```
http://localhost:3000
```

---

## **Screenshots Required for Submission**

The screenshots are in a folder named `screenshots/`:

1. **Full Dashboard – Home Page**  
2. **Light Mode**  
3. **Dark Mode**  
4. **Sidebar Navigation (Courses page)**  
5. **Sidebar Navigation (Profile page)**  
6. **Sidebar Navigation (Settings page)**  
7. **Attendance Trend Chart**  

---

## **Purpose of the Project**
This dashboard demonstrates:
- Practical frontend knowledge  
- Component reusability  
- React state management  
- UI design capabilities  
- Chart integration  
- Clean, modular code organization  

It fulfills the academic requirements of a fully functional dashboard for student data visualization.

---

## Developed by  
**Swarali Fendar**  
*Final Year – IT Department*  
*Roll No. :- 13*

