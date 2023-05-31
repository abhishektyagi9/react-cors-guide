//define a NavBar function with a Div element
function NavBar() {
  // return the Div element with the title and person object
  return (
    <div className="navbar">
       <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</a>
      </div>
    </div>
  );
}   
// export the NavBar function
export default NavBar;