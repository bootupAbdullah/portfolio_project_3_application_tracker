const Navbar = ({displayPage}) => {
    return (
        <nav>
            <button onClick={displayPage} value="Home">Home</button>
            <button onClick={displayPage} value="Create">Add Applicaton</button>
        </nav>
    );
};

export default Navbar;