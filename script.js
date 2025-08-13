const students = [
  {
    name: "Amit Sharma",
    branch: "Computer Science",
    company: "Google",
    role: "Software Engineer",
    profile: "https://linkedin.com/in/amitsharma"
  },
  {
    name: "Sneha Reddy",
    branch: "Information Technology",
    company: "Amazon",
    role: "Data Analyst",
    profile: "https://linkedin.com/in/snehareddy"
  },
  {
    name: "Ravi Kumar",
    branch: "Electronics",
    company: "TCS",
    role: "Systems Engineer",
    profile: "https://linkedin.com/in/ravikumar"
  },
  {
    name: "Priya Verma",
    branch: "Mechanical",
    company: "Infosys",
    role: "Associate Engineer",
    profile: "https://linkedin.com/in/priyaverma"
  }
  // Add more student entries as needed
];

const profilesDiv = document.getElementById('profiles');
const searchInput = document.getElementById('search');

function renderProfiles(filter = "") {
  profilesDiv.innerHTML = "";
  const filtered = students.filter(student =>
    student.name.toLowerCase().includes(filter.toLowerCase()) ||
    student.branch.toLowerCase().includes(filter.toLowerCase()) ||
    student.company.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    profilesDiv.innerHTML = "<p>No matching results found.</p>";
    return;
  }

  filtered.forEach(student => {
    const card = document.createElement('div');
    card.className = "profile-card";
    card.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>Branch:</strong> ${student.branch}</p>
      <p><strong>Company:</strong> ${student.company}</p>
      <p><strong>Role:</strong> ${student.role}</p>
      <p><a href="${student.profile}" target="_blank">View Profile</a></p>
    `;
    profilesDiv.appendChild(card);
  });
}

// Initial render
renderProfiles();

// Add search functionality
searchInput.addEventListener('input', (e) => {
  renderProfiles(e.target.value);
});
