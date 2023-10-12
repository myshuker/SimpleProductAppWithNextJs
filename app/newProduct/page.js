function AddNewProduct() {
  return (
    <div>
      <form 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "600px",
          border: "2px solid black ",

          borderRadius: "10px",
        }}
      >
        <label>Product Name </label>
        <input type="" />
        <label>Product Image </label>
        <input type="" />
        <label>Description </label>
        <textarea type="" />
        <label>Price </label>
        <input type="" />
        <button> Add Product</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
