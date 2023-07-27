---
title: "Register Form"
date: 2023-07-25 16:12:54 -0700
categories: jekyll update
---

Services provided and benefits text

## Personal Information

{% raw %}
<body>
<form>
    <div>
        <label>
            First Name:
            <input type="text" name="firstName" required />
        </label>
    </div>
    <div>
        <label>
            Last Name:
            <input type="text" name="lastName" required />
        </label>
    </div>
    <div>
        <label>
            Phone Number:
            <input type="tel" name="phoneNumber" required />
        </label>
    </div>
    <div>
        <label>
            Email Address:
            <input type="email" name="emailAddress" required />
        </label>
    </div>
    <div id="veteran-select">
        <label for="veteran">Veteran Status:</label>
        <label for="veteran">
            Veteran
            <input type="checkbox" id="veteran" name="veteranStatus" required />
        </label>
        <label for="non-veteran">Non-Veteran
            <input type="checkbox" id="non-veteran" name="veteranStatus" required />
        </label>
        <div id="non-veteran-input" style="display: none;">
            <label>
                Scrub Em:
                <input id="relationship" type="text" required>
            </label>
        </div>
    </div>
    <div>
        <label>
            Business Role:
            <input type="text" name="businessRole" required />
        </label>
    </div>
    <header class="major">
											<h2>Business Information</h2>
										</header>
										<div>											
											<div>
												<label>
												  Industry:
												  <select name="industry" id="industrySelect" required>
													<option value="">Select an industry</option>
													<option value="Technology">Technology</option>
													<option value="Healthcare">Healthcare</option>
													<option value="Retail">Retail</option>
													<option value="Other">Other</option>
												  </select>
												</label>
											  </div>
											  <!-- Set the "Other" field to not display by default -->
											  <div id="otherIndustryDiv" style="display: none;">
												<label>
												  Other Industry:
												  <!-- New input field rendered in JS script -->
												  <input type="text" name="otherIndustry" id="otherIndustryInput" />
												</label>
											  </div>						
										</div>
										<div>
										  <label>
											Business Address:
											<input
											  type="text"
											  name="businessAddress"
											  required
											/>
										  </label>
										</div>										
										<div>
										  <label>
											LLC: 
											<input
											  type="text"
											  name="taxId"
											  required
											/>
										  </label>
										  <div>
										  <label>
											Tax ID:
											<input
											  type="text"
											  name="taxId"
											  required
											  />
										  </label>
										  </div>        
										</div>
										<div>
											<label>
											  Link to Website (optional):
											  <input
												type="url"
												name="websiteLink"
											  />
											</label>
										  </div>
										  <div>
											<label>
											  Social Media Links (optional):
											  <input
												type="text"
												name="socialMediaLinks"
											  />
											</label>
										  </div>
										<div>
										  <label>
											Tell us about your company:
											<textarea
												name="companyDescription"
												required>
											</textarea>
										  </label>
										</div>
										<div>
										  <label>
											Years in Operation:
											<input
											  type="number"
											  name="yearsInOperation"
											/>
										  </label>
										</div>
										<div>
											<label>
											  Logo or Image (optional):
											  <input
												type="file" 
												name="logoImage"
												accept="image/png, image/jpeg">
											</label>
										  </div>
										<button type="submit">Submit</button>
									</form>
										<script src="/assets/js/myscript.js" ></script>
									</body>					    		
			
	
{% endraw %}

