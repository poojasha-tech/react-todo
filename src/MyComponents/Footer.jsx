import React from 'react';

const Footer = () => {

  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    padding: "10px 0"
  }

  
  return (
    <footer className="bg-dark text-light py-3 text-center" style={footerStyle}>
      <p>Copyright &copy; MyTodoList 2025</p>
      <p>Developed by Pooja Sharma</p>
        
      
    </footer>
  )
}

export default Footer
