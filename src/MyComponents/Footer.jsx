import React from 'react';

const Footer = () => {

  let footerStyle = {
    position: "realtive",
    top: "70vh",
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center"
  }

  
  return (
    <footer className="bg-dark text-light py-3 text-center" style={footerStyle}>
      <p>Copyright &copy; MyTodoList 2025</p>
      <p>Developed by Pooja Sharma</p>
        
      
    </footer>
  )
}

export default Footer
