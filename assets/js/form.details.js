const handleChange = (e) => {
    const {name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked: value;

    setFormData((prevData) => ({
        ...prevData,
        [name]: newValue
    }))
}

const renderOtherIndustryInput = () => {
    if (formData.industry === 'Other') {
      return (
        <div>
          <label>
            Please specify your industry:
            <input
              type="text"
              name="otherIndustry"
              value={formData.otherIndustry}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      );
    }
  };