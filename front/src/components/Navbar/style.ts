import { styled } from "#/stitches.config";


export const Navbar = styled('div',{
    position:"fixed",
    bottom:0,
    width:"100%",
    height:"80px", 
    background:"purple",
})

export const Nav = styled('div',{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
})

export const LinkWrapper = styled('div', {
    color: "red",
    display: "inline-flex",
    padingLeft:"20px",
    paddingRight:"20px",
    flexDirection: "column",
    alignItems:"center",
    padding:"15px",
    justifyContent:"space-around",
    backgroundColor:"white",
    borderRadius:"20px",
    margin:"10px"
});
