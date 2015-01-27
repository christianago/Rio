<?php session_start(); error_reporting(0); ?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Hotel Rio Athens</title>

<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="css/bootstrap-datepicker.css" />
<link rel="stylesheet" href="css/font-awesome.min.css" />
<link rel="stylesheet" href="css/index.css" />

</head>
<body>

<?php include_once 'modals.php'; ?>

<div class="container">

<div id="message"><?php echo @$_SESSION['message'];?></div>
<?php $_SESSION['message'] = ''; ?>

	<div class="row the-header">
		<div class="col-xs-12">
			<?php include_once 'header.php'; ?>
		</div>
	</div>

	<div class="general-area-1 row">
	
		<div class="col-xs-9 col-lg-8 welcome">
			<div class="content-title"></div><br/>
			
			<div class="content"></div>
			
			
			<form action="submit.php" method="post">
			
				<div class="row contact-field">
					<div class="col-xs-12"><br/><div class="sub-title content-title"></div><br/></div>
				
				<div class="row contact-field">
					<div class="col-xs-3 content"></div>
					<div class="col-xs-3">
						<input class="form-control" type="text" name="firstname" required="required" />
					</div>
					<div class="col-xs-1"><i class="fa fa-asterisk"></i></div>
				</div> 
				
				<div class="row contact-field">
					<div class="col-xs-3 content"></div>
					<div class="col-xs-3">
						<input class="form-control" type="text" name="lastname" required="required" />
					</div>
					<div class="col-xs-1"><i class="fa fa-asterisk"></i></div>
				</div>	

				<div class="row contact-field">
				<div class="col-xs-3 content"></div>
					<div class="col-xs-3">
						<select required="required" data-param="country" required="required" name="country" class="form-control"><option value="1">Afghanistan</option><option value="2">Aland Islands</option><option value="3">Albania</option><option value="4">Algeria</option><option value="5">American Samoa</option><option value="6">Andorra</option><option value="7">Angola</option><option value="8">Anguilla</option><option value="9">Antarctica</option><option value="10">Antigua and Barbuda</option><option value="11">Argentina</option><option value="12">Armenia</option><option value="13">Aruba</option><option value="14">Australia</option><option value="15">Austria</option><option value="16">Azerbaijan</option><option value="17">Bahamas</option><option value="18">Bahrain</option><option value="19">Bangladesh</option><option value="20">Barbados</option><option value="21">Belarus</option><option value="22">Belgium</option><option value="23">Belize</option><option value="24">Benin</option><option value="25">Bermuda</option><option value="26">Bhutan</option><option value="27">Bolivia, Plurinational State of</option><option value="28">Bonaire, Sint Eustatius and Saba</option><option value="29">Bosnia and Herzegovina</option><option value="30">Botswana</option><option value="31">Bouvet Island</option><option value="32">Brazil</option><option value="33">British Indian Ocean Territory</option><option value="34">Brunei Darussalam</option><option value="35">Bulgaria</option><option value="36">Burkina Faso</option><option value="37">Burundi</option><option value="38">Cambodia</option><option value="39">Cameroon</option><option value="40">Canada</option><option value="41">Cape Verde</option><option value="42">Cayman Islands</option><option value="43">Central African Republic</option><option value="44">Chad</option><option value="45">Chile</option><option value="46">China</option><option value="47">Christmas Island</option><option value="48">Cocos (Keeling) Islands</option><option value="49">Colombia</option><option value="50">Comoros</option><option value="51">Congo</option><option value="52">Congo, the Democratic Republic of the</option><option value="53">Cook Islands</option><option value="54">Costa Rica</option><option value="55">Cote d'Ivoire</option><option value="56">Croatia</option><option value="57">Cuba</option><option value="58">Curacao</option><option value="59">Cyprus</option><option value="60">Czech Republic</option><option value="61">Denmark</option><option value="62">Djibouti</option><option value="63">Dominica</option><option value="64">Dominican Republic</option><option value="65">Ecuador</option><option value="66">Egypt</option><option value="67">El Salvador</option><option value="68">Equatorial Guinea</option><option value="69">Eritrea</option><option value="70">Estonia</option><option value="71">Ethiopia</option><option value="72">Falkland Islands (Malvinas)</option><option value="73">Faroe Islands</option><option value="74">Fiji</option><option value="75">Finland</option><option value="76">France</option><option value="77">French Guiana</option><option value="78">French Polynesia</option><option value="79">French Southern Territories</option><option value="80">Gabon</option><option value="81">Gambia</option><option value="82">Georgia</option><option value="83">Germany</option><option value="84">Ghana</option><option value="85">Gibraltar</option><option value="86" selected="selected">Greece</option><option value="87">Greenland</option><option value="88">Grenada</option><option value="89">Guadeloupe</option><option value="90">Guam</option><option value="91">Guatemala</option><option value="92">Guernsey</option><option value="93">Guinea</option><option value="94">Guinea-Bissau</option><option value="95">Guyana</option><option value="96">Haiti</option><option value="97">Heard Island and McDonald Islands</option><option value="98">Holy See (Vatican City State)</option><option value="99">Honduras</option><option value="100">Hong Kong</option><option value="101">Hungary</option><option value="102">Iceland</option><option value="103">India</option><option value="104">Indonesia</option><option value="105">Iran, Islamic Republic of</option><option value="106">Iraq</option><option value="107">Ireland</option><option value="108">Isle of Man</option><option value="109">Israel</option><option value="110">Italy</option><option value="111">Jamaica</option><option value="112">Japan</option><option value="113">Jersey</option><option value="114">Jordan</option><option value="115">Kazakhstan</option><option value="116">Kenya</option><option value="117">Kiribati</option><option value="118">Korea, Democratic People's Republic of</option><option value="119">Korea, Republic of</option><option value="120">Kuwait</option><option value="121">Kyrgyzstan</option><option value="122">Lao People's Democratic Republic</option><option value="123">Latvia</option><option value="124">Lebanon</option><option value="125">Lesotho</option><option value="126">Liberia</option><option value="127">Libya</option><option value="128">Liechtenstein</option><option value="129">Lithuania</option><option value="130">Luxembourg</option><option value="131">Macao</option><option value="132">Macedonia, the former Yugoslav Republic of</option><option value="133">Madagascar</option><option value="134">Malawi</option><option value="135">Malaysia</option><option value="136">Maldives</option><option value="137">Mali</option><option value="138">Malta</option><option value="139">Marshall Islands</option><option value="140">Martinique</option><option value="141">Mauritania</option><option value="142">Mauritius</option><option value="143">Mayotte</option><option value="144">Mexico</option><option value="145">Micronesia, Federated States of</option><option value="146">Moldova, Republic of</option><option value="147">Monaco</option><option value="148">Mongolia</option><option value="149">Montenegro</option><option value="150">Montserrat</option><option value="151">Morocco</option><option value="152">Mozambique</option><option value="153">Myanmar</option><option value="154">Namibia</option><option value="155">Nauru</option><option value="156">Nepal</option><option value="157">Netherlands</option><option value="158">New Caledonia</option><option value="159">New Zealand</option><option value="160">Nicaragua</option><option value="161">Niger</option><option value="162">Nigeria</option><option value="163">Niue</option><option value="164">Norfolk Island</option><option value="165">Northern Mariana Islands</option><option value="166">Norway</option><option value="167">Oman</option><option value="168">Pakistan</option><option value="169">Palau</option><option value="170">Palestine, State of</option><option value="171">Panama</option><option value="172">Papua New Guinea</option><option value="173">Paraguay</option><option value="174">Peru</option><option value="175">Philippines</option><option value="176">Pitcairn</option><option value="177">Poland</option><option value="178">Portugal</option><option value="179">Puerto Rico</option><option value="180">Qatar</option><option value="181">Reunion !Reunion</option><option value="182">Romania</option><option value="183">Russian Federation</option><option value="184">Rwanda</option><option value="185">Saint Barthelemy</option><option value="186">Saint Helena, Ascension and Tristan da Cunha</option><option value="187">Saint Kitts and Nevis</option><option value="188">Saint Lucia</option><option value="189">Saint Martin (French part)</option><option value="190">Saint Pierre and Miquelon</option><option value="191">Saint Vincent and the Grenadines</option><option value="192">Samoa</option><option value="193">San Marino</option><option value="194">Sao Tome and Principe</option><option value="195">Saudi Arabia</option><option value="196">Senegal</option><option value="197">Serbia</option><option value="198">Seychelles</option><option value="199">Sierra Leone</option><option value="200">Singapore</option><option value="201">Sint Maarten (Dutch part)</option><option value="202">Slovakia</option><option value="203">Slovenia</option><option value="204">Solomon Islands</option><option value="205">Somalia</option><option value="206">South Africa</option><option value="207">South Georgia and the South Sandwich Islands</option><option value="208">South Sudan</option><option value="209">Spain</option><option value="210">Sri Lanka</option><option value="211">Sudan</option><option value="212">Suriname</option><option value="213">Svalbard and Jan Mayen</option><option value="214">Swaziland</option><option value="215">Sweden</option><option value="216">Switzerland</option><option value="217">Syrian Arab Republic</option><option value="218">Taiwan, Province of China</option><option value="219">Tajikistan</option><option value="220">Tanzania, United Republic of</option><option value="221">Thailand</option><option value="222">Timor-Leste</option><option value="223">Togo</option><option value="224">Tokelau</option><option value="225">Tonga</option><option value="226">Trinidad and Tobago</option><option value="227">Tunisia</option><option value="228">Turkey</option><option value="229">Turkmenistan</option><option value="230">Turks and Caicos Islands</option><option value="231">Tuvalu</option><option value="232">Uganda</option><option value="233">Ukraine</option><option value="234">United Arab Emirates</option><option value="235">United Kingdom</option><option value="236">United States</option><option value="237">United States Minor Outlying Islands</option><option value="238">Uruguay</option><option value="239">Uzbekistan</option><option value="240">Vanuatu</option><option value="241">Venezuela, Bolivarian Republic of</option><option value="242">Viet Nam</option><option value="243">Virgin Islands, British</option><option value="244">Virgin Islands, U.S.</option><option value="245">Wallis and Futuna</option><option value="246">Western Sahara</option><option value="247">Yemen</option><option value="248">Zambia</option><option value="249">Zimbabwe</option></select>
					</div>
					<div class="col-xs-1"><i class="fa fa-asterisk"></i></div>
				</div>	
				
				<div class="row contact-field">
				<div class="col-xs-3 content"></div>
					<div class="col-xs-3">
						<input class="form-control" type="text" name="address" />
					</div>
				</div>	

				<div class="row contact-field">
				<div class="col-xs-3 content"></div>
					<div class="col-xs-3">
						<input class="form-control" type="tel" name="tel" />
					</div>
				</div>	
				
				<div class="row contact-field">
				<div class="col-xs-3 content"></div>
					<div class="col-xs-3">
						<input class="form-control" type="email" name="email" required="required" />
					</div>
					<div class="col-xs-1"><i class="fa fa-asterisk"></i></div>
				</div>	
				
				<div class="row contact-field">
					<div class="col-xs-3 content"></div>
					<div class="col-xs-3">
						<textarea class="form-control" name="message" required="required"></textarea>
					</div>
					<div class="col-xs-1"><i class="fa fa-asterisk"></i></div>
				</div>	
				
				<div class="row contact-field">
					<div class="col-xs-3"></div>
					<div class="col-xs-2">
						<img id="captcha-img" src="securimage/securimage_show.php" alt="CAPTCHA Image" />
					</div>
				</div>	
				
				<div class="row contact-field">
					<div class="col-xs-3"></div>
					<div class="col-xs-3">
						<input class="form-control" type="text" id="captcha-text" name="captcha" required="required" placeholder="Please enter the above text" />
						<br/>
						
						<div class="system-message">
							 <div class="email-message" title="EL">Ευχαριστούμε! Το μήνυμά σας εστάλη με επιτυχία.</div>
					     	 <div class="email-message" title="EN">Thank you! Your message sent succesfully.</div>
					     	 
					     	 <div class="captcha-message" title="EL">Ο κωδικός CAPTCHA δεν είναι σωστός. Παρακαλούμε προσπαθήστε ξανά.</div>
					     	 <div class="captcha-message" title="EN">CAPTCHA code is not correct. Please try again.</div>
					     	 
					     	 <div class="fail-message" title="EL">Προέκυψε κάποιο σφάλμα. Παρακαλούμε προσπαθήστε ξανά αργότερα.</div>
					     	 <div class="fail-message" title="EN">Error occured. Please try again later.</div>
						</div>
						
						<br/>
						<input class="form-control btn btn-primary content" type="submit" id="email-us" name="email-us" value="Αποστολή" />
					</div>
					<div class="col-xs-1"><i class="fa fa-asterisk"></i></div>
				</div>	
				
				<div class="row">
					<div class="col-xs-12">
						<span class="content required-note"></span>&nbsp;<i class="fa fa-asterisk">&nbsp;</i><span class="content required-note"></span>
					</div>
				</div>
			
			</form>
			
		  </div>

		</div>

		<?php include_once 'footer.php'; ?>
		
</div>

	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.lazyload.js"></script>
	<script src="js/date.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script src="js/jquery.cycle.all.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script src="js/index.js"></script>
</body>
</html>

