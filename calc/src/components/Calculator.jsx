import { useState } from "react";
import Select from "react-select";
import "./calculator.css";
import DatePick from "./DatePick";

// Options for academic level
const options = [
  { value: "HighSchool", label: "High School" },
  { value: "Undergraduate", label: "Undergraduate" },
  { value: "Professional", label: "Professional" },
  { value: "Bachelor", label: "Bachelor" },
];

// Custom styles for Select component
const customStyles = {
  control: (provided) => ({
    ...provided,
    textAlign: "center",
    borderRadius: 9,
    marginTop: -10,
    fontWeight: 400,
  }),
  option: (provided) => ({
    ...provided,
    textAlign: "center",
    borderRadius: 9,
    padding: "10px",
  }),
};

// Options for types of papers
const selectoptions = [
  { value: "ResearchPaper", label: "Research Paper" },
  { value: "Research Proposal", label: "Research Proposal" },
  { value: "Speech", label: "Speech" },
  { value: "Thesis", label: "Thesis" },
  { value: "Thesis Proposal", label: "Thesis Proposal" },
  { value: "Thesis Statement", label: "Thesis Statement" },
];

const Calculator = () => {
  const [category, setCategory] = useState(null); // State for academic level category
  const [option, setOption] = useState(null); // State for selected academic level
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [quantityType, setQuantityType] = useState("Pages"); // State for quantity type (Pages or Words)

  // Function to calculate the price based on selected options
  const calculatePrice = () => {
    if (category && option) {
      let price;
      if (category.value === "AcademicWriting") {
        if (option.value === "HighSchool") price = 12;
        else if (option.value === "Undergraduate") price = 15;
        else if (option.value === "Professional") price = 21;
        else if (option.value === "Bachelor") price = 25;
      } else if (category.value === "EditingProofreading") {
        if (option.value === "HighSchool") price = 3;
        else if (option.value === "Undergraduate") price = 5;
        else if (option.value === "Professional") price = 7;
        else if (option.value === "Bachelor") price = 13;
      } else if (category.value === "Calculations") {
        if (option.value === "HighSchool") price = 18;
        else if (option.value === "Undergraduate") price = 23;
        else if (option.value === "Professional") price = 32;
        else if (option.value === "Bachelor") price = 38;
      }

      if (quantityType === "Pages") {
        return `$${price * quantity}`;
      } else {
        return `$${price}`;
      }
    }
    return "";
  };

  return (
    <div className="calc">
      <div className="calculator">
        {/* Top layer of buttons for selecting academic level category */}
        <div className="top-layer">
          <button onClick={() => setCategory({ value: "AcademicWriting", label: "Academic Writing" })}>
            Academic writing
          </button>
          <button onClick={() => setCategory({ value: "EditingProofreading", label: "Editing and Proofreading" })}>
            Editing and Proofreading
          </button>
          <button onClick={() => setCategory({ value: "Calculations", label: "Calculations" })}>
            Calculations
          </button>
        </div>

        

        {/* Top layer of buttons for selecting specific academic level */}
        <div className="top-layer">
          {options.map((opt) => (
            <button key={opt.value} onClick={() => setOption(opt)}>
              {opt.label}
            </button>
          ))}
        </div>



        {/* Section for selecting type of paper, quantity, quantity type, and deadline */}
        <div className="paper-select">
          <p>Type of paper</p>
          <div className="select-box">
            <Select options={selectoptions} styles={customStyles} />
          </div>



          <div className="quantity-c">
            {/* Quantity input */}
            <div className="quantity">
              <p>Quantity</p>
              <label>
                <input
                  type="number"
                  value={quantityType === "Words" ? "275" : String(quantity)}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setQuantity(value === "" ? 1 : parseInt(value));
                  }}
                  readOnly={quantityType === "Words"}
                />
              </label>
              {/* Quantity type buttons (Pages or Words) */}
              <div className="quantity-buttons">
                <button className="quantity-button" onClick={() => {
                  setQuantityType("Pages");
                  if (quantityType === "Words") {
                    setQuantity(1);
                  }
                }}>
                  Pages
                </button>
                <button className="quantity-button" onClick={() => {
                  setQuantityType("Words");
                  setQuantity(275);
                }}>
                  Words
                </button>
              </div>
            </div>
            {/* Deadline input */}
            <div className="calendar">
              <p>Deadline</p>
              <DatePick />
            </div>
          </div>
        </div>



        {/* Bottom layer displaying approximate price and proceed to order button */}
        <div className="bottom-layer">
          {/* Approximate price */}
          <div className="price">
            <p>Approx. Price</p>
            <h2>{calculatePrice()}</h2>
          </div>



          {/* Proceed to order button */}
          <div className="proceed-button">
            <button>PROCEED TO ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
