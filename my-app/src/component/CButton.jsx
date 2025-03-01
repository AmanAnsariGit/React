function CButton() {
    return(
        <div style={{display:"flex", justifyContent:"center", gap:"20px"}}>
        <p style={{fontSize:"25px"}}>$45.00</p>
            <button style={{borderRadius:"5px", backgroundColor:"transparent", color:"brown", borderColor:"brown" }}>Add to Cart</button>
        </div>
    )
}

export default CButton;