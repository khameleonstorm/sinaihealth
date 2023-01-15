import randomNumber from 'random-number';

export const drugs = [
  {
    name: "Adalat CC",
    category: "Hypertension",
    amount: 13,
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    src: "/assets/drugs/AdalatCC.jpg",
    desc: "Take Adalat CC exactly as prescribed by your doctor. Follow all directions on your prescription label and read all medication guides or instruction sheets. Your doctor may occasionally change your dose.\nSwallow the tablet whole and do not crush, chew, or break the tablet.\nTake the extended-release tablet on an empty stomach.\nYour dose needs may change if you switch to a different brand, strength, or form of nifedipine. Avoid medication errors by using only the form and strength your doctor prescribes.\nYour blood pressure will need to be checked often and you may need other medical tests.\nKeep using this medicine even if you feel well. Use all your heart or blood pressure medications as directed and read all medication guides you receive. Do not change your dose or stop taking your medicine without your doctor’s advice.\nYou may have very low blood pressure while taking this medication. Call your doctor if you are sick with vomiting or diarrhea, or if you are sweating more than usual.\nIf you need surgery, tell the surgeon ahead of time that you are using Adalat CC. You may need to stop using the medicine at least 36 hours before surgery.\nSome tablets are made with a shell that is not absorbed or melted in the body. Part of this shell may appear in your stool. This is normal and will not make the medicine less effective.\nStore in the original container at room temperature, away from moisture, heat, and light.",
    note: {
      title: "",
      desc: [
        "This medication is used alone or in combination with other drugs to treat high blood pressure (hypertension)"
      ]
    }
  },
  {
    name: "Aleve",
    category: "Pain",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 10,
    src: "/assets/drugs/Aleve.jpg",
    desc: "Aleve is used to relieve pain from various conditions such as headache, muscle aches, tendonitis, dental pain, and menstrual cramps. It also reduces pain, swelling, and joint stiffness caused by arthritis, bursitis, and gout attacks. This medication is known as a nonsteroidal anti-inflammatory drug (NSAID).",
    note: {
      title: "",
      desc: [
        "Keep your first aid kit or medicine cabinet fully stocked with the help of these Aleve 48850 pain reliever / fever reducer tablets. These tablets provide name brand relief from headache, muscle aches, backaches, menstrual pain, minor arthritis, and other joint pain. A single tablet lasts up to a whopping 12 hours. Perfect for any setting, including restaurants, schools, offices, or hotels, where maintaining a steady supply of these handy tablets will help keep your employees happy and healthy.",

        "This box includes a total of 50 tablets that come in 50 tamper-evident sealed packets, so your medicine cabinet will be well equipped when supplies are needed. These pills contain 220 mg naproxen sodium. For best results, always thoroughly read the directions and warnings on the box.",
      ]
    }
  },
  {
    name: "Ambroxol Hcl",
    category: "Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 30,
    src: "/assets/drugs/AmbroxolHcl.jpg",
    desc: "Ambroxol is a secretolytic agent used in the treatment of respiratory diseases associated with viscid or excessive mucus. It is the active ingredient of Mucosolvan, Lasolvan or Mucoangin. The substance is a mucoactive drug with several properties including secretolytic and secretomotoric actions that restore the physiological clearance mechanisms of the respiratory tract which play an important role in the body’s natural defence mechanisms. It stimulates synthesis and release of surfactant by type II pneumocytes. Surfactants acts as an anti-glue factor by reducing the adhesion of mucus to the bronchial wall, in improving its transport and in providing protection against infection and irritating agents",
    note: {
      title: "",
      desc: [
        "This medication is a mucolytic agent, prescribed for various respiratory diseases such as emphysema with bronchitis pneumoconiosis, chronic inflammatory pulmonary conditions, tracheobronchitis (respiratory tract inflammation), bronchiectasis, bronchitis with bronchospasm asthma.",
      ]
    }
  },
  {
    name: "Amlodipine",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 8,
    src: "/assets/drugs/Amlodipine.jpg",
    desc: "AMLODIPINE (am LOE di peen) treats high blood pressure and prevents chest pain (angina). It works by relaxing the blood vessels, which helps decrease the amount of work your heart has to do. It belongs to a group of medications called calcium channel blockers. (am LOE di peen) treats high blood pressure and prevents chest pain (angina). It works by relaxing the blood vessels, which helps decrease the amount of work your heart has to do. It belongs to a group of medications called calcium channel blockers.",
    note: {
      title: "",
      desc: [
        "AMLODIPINE (am LOE di peen) treats high blood pressure and prevents chest pain (angina).",
      ]
    }
  },
  {
    name: "Apixaban (Eliquis)",
    category: "Anticoagulants",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 391,
    src: "/assets/drugs/Apixaban.jpg",
    desc: "Apixaban is used to lower the risk of stroke or a blood clot in people with a heart rhythm disorder called atrial fibrillation.\nApixaban reduces the risk of forming a blood clot in the legs and lungs of people who have just had hip or knee replacement surgery.\nApixaban treats blood clots in the veins of your legs (DVT – deep vein thrombosis) or lungs (pulmonary embolism), and reduce the risk of them occurring again.",
    note: {
      title: "",
      desc: [
        "Apixaban is used to prevent serious blood clots from forming due to a certain irregular heartbeat (atrial fibrillation) or after hip/knee replacement surgery.",
      ]
    }
  },
  {
    name: "Arazo Nutrition Blood Sugar 365 Supplement – 120 Herbal Pills – 120 Day Supply",
    category: "Diabetics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 19,
    src: "/assets/drugs/ArazoNutritionBloodSugar.jpg",
    desc: "Arazo Nutrition – Blood Sugar 365\nMade in USA\nScientifically formulated; great care was put into combining just the right amount of 20 different ingredients into a premium formula designed to support healthy blood sugar levels\nHigh potency support for 365 days a year; the unique combination in this blend is crafted to help support healthy glucose absorption and glucose production by your body; contains Gymnema, Alpha Lipoic Acid, Yarrow, Licorice, Cayenne, Banaba, Guggul, Bitter Melon, Juniper Berry, White Mulberry, L-Taurine & more\nOne capsule twice a day, five benefits; (1) supports normal blood sugar levels; (2) supports weight control and energy; (3) supports healthy sugar and carb absorption; (4) supports insulin levels; (5) supports heart health; daily support for healthy blood glucose levels, 365 days a year\nReliable; made in a GMP certified facility in America and third party safety tested for purity\nGreat value for money; 120 vegetarian capsules for a 60 days supply",
    note: {
      title: "",
      desc: [
        "Arazo Nutrition Blood Sugar 365 Supplement – 120 Herbal Pills – 120 Day Supply",
      ]
    }
  },
  {
    name: "Atenolol",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 7,
    src: "/assets/drugs/Atenolol.jpg",
    desc: "ATENOLOL (a TEN oh lole) treats high blood pressure. It also prevents chest pain (angina) or further damage after a heart attack. It works by lowering your blood pressure and heart rate, making it easier for your heart to pump blood to the rest of your body. It belongs to a group of medications called beta blockers.",
    note: {
      title: "",
      desc: [
        "ATENOLOL (a TEN oh lole) treats high blood pressure.",
      ]
    }
  },
  {
    name: "Atorvastatin",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 12,
    src: "/assets/drugs/Atorvastatin.jpg",
    desc: "ATORVASTATIN (a TORE va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke. It works by decreasing bad cholesterol and fats (such as LDL, triglycerides) and increasing good cholesterol (HDL) in your blood. It belongs to a group of medications called statins. Changes to diet and exercise are often combined with this medication.",
    note: {
      title: "",
      desc: [
        "ATORVASTATIN (a TORE va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke.",
      ]
    }
  },
  {
    name: "Atorvastatin RVN",
    category: "Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 19,
    src: "/assets/drugs/AtorvastatinRVN.jpg",
    desc: "Atorvastatin, what is it?\nAtorvastatin is a medication prescribed by a doctor to help lower cholesterol levels of people who have been diagnosed with high cholesterol. Atorvastatin belongs to a class of lipid-lowering medications called Statins. Statins are medications that function by reducing the amount of cholesterol in the blood. The medication is meant for adults and children over the age of 10, whose cholesterol levels do not reduce enough with exercise and low-fat diets alone.\nAtorvastatin has the ability to lower the risk of strokes, heart attacks, and chest pain in patients who have heart disease, have a history of heart disease, or have the risk factors for heart disease such as smoking, high blood pressure, age, or a history of heart disease in the family.\nWhat is Atorvastatin used for?\nAtorvastatin is used to treat high cholesterol. In some cases, you may be prescribed Atorvastatin even if your cholesterol level is not too high, but for the benefit of reducing your risk of heart attack or stroke. It is especially used to treat people who have head strokes or heart attacks in the past, because it can prevent new ones from happening.",
    note: {
      title: "",
      desc: [
        "Atorvastatin is used along with a proper diet to help lower “bad” cholesterol and fats (such as LDL, triglycerides) and raise “good” cholesterol (HDL) in the blood.",
      ]
    }
  },
  {
    name: "Avonex",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 3650,
    src: "/assets/drugs/Avonex.jpg",
    desc: "Before taking Avonex (Interferon Beta), inform your doctor if you are pregnant, plan to become pregnant or breastfeeding; if you are taking prescription or over the counter medication, herbal preparation, or dietary supplements; if you have liver disease, epilepsy or other seizure disorder, heart disease, chest pain, congestive heart failure, or a heart rhythm disorder; if you have a thyroid disorder or a history of depression or suicidal behavior.\nWhen taking Avonex (Interferon Beta), you may become very depressed or had thoughts of suicide. Once you experience symptoms of depression such as crying, sadness, thoughts of hurting yourself, or loss of interest in things you once liked, stop using Avonex (Interferon Beta). Avoid drinking alcohol while on Avonex (Interferon Beta) because it can increase the risk of liver damage.\nPatient Family Information : Read the directions on the prescription label. Do not take larger doses than prescribed by your doctor. Take this medication as directed on the label or by your pharmacist, doctor, or other healthcare provider. If you are not properly trained for a self injection, do not understand how to give an injection or dispose used syringes, do not self inject the medication. Avonex (Interferon Beta) should be injected into a muscle of an upper arm or thigh. When using the powder form of Avonex (Interferon Beta), mix it with liquid (diluent) in a medicine vial and gently swirl (do not shake) the medication until it becomes clear or light yellow. If the mixture has changed colors or has particles in it, do not use. Only draw a dose into a syringe when you are ready for the injection. Each disposable needles can only be used once, dispose each used needle in a puncture proof container. To ensure this medication is not causing harmful effects, regular blood and liver function tests will be done by\nDo not use Avonex (Interferon Beta) if you are pregnant or are allergic to interferons or human albumin.\nSever Side Effects : Severe: Easy bruising or bleeding, weakness; numbness or tingling in your hands or feet, pain, swelling or skin changes where the injection was given; nausea, stomach pain, low fever, loss of appetite, dark urine, clay-colored stools, jaundice (yellowing\nCommon: Stomach pain, runny or stuffy nose; or headache and dizziness.\n\nOther: None.\nAvonex | Interferon beta 1a | Avonex | Avonex",
    note: {
      title: "",
      desc: [
        "Avonex (Interferon Beta) is a medication used to decrease the frequency of relapse symptoms in patients with multiple sclerosis, slowing down the accumulation of physical disability.",

        "Store in a refrigerator and do not allow it to freeze. Half an hour before using the medication, the syringe may be taken out of the refrigerator and left at room temperature. Do not warm a prefilled syringe with external heat sources such as hot water. Avonex (Interferon Beta) syringes can also be stored at room temperature for 7 days (powder form can be stored up to 30 days) if it is kept away from light. Dispose any Avonex (Interferon Beta) syringes if it has been exposed to light, high heat, or has become frozen. The powder form of Avonex (Interferon Beta) must be used within 6 hours after it has been mixed with the diluent. Keep away from children and pets.",
      ]
    }
  },
  {
    name: "Ayvakit",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 22380,
    src: "/assets/drugs/Ayvakit.jpg",
    desc: "tell your doctor about all of your medical conditions and the medicines you take.\nIf you miss a dose of AYVAKIT, take it as soon as you remember, unless your next scheduled dose is due within 8 hours. Then, take the next dose at your regular time. If you vomit after taking a dose of AYVAKIT, do not take an extra dose. Take your next dose at your next scheduled time.",
    note: {
      title: "",
      desc: [
        "This medication is used to treat a certain type of stomach, bowel, or esophagus cancer (gastrointestinal stromal tumor-GIST). Ayvakit is also be used to treat a certain immune system disorder (advanced systemic mastocytosis",
      ]
    }
  },
  {
    name: "Irbesartan",
    category: "Hypertension",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 26,
    src: "/assets/drugs/irbesartan.jpg",
    desc: "Irbesartan is an angiotensin II receptor blocker (sometimes called an ARB).\nIrbesartan is used to treat high blood pressure (hypertension) in adults and children at least 6 years old. Lowering blood pressure may lower your risk of a stroke or heart attack.\nIrbesartan is also used to treat kidney problems caused by type 2 diabetes.\nIrbesartan may also be used for purposes not listed in this medication guide",
    note: {
      title: "Before taking this medicine",
      desc: [
        "You should not use irbesartan if you are allergic to it.", 
        "f you have diabetes, do not take irbesartan with any medication that contains aliskiren (a blood pressure medicine).",
        "You may also need to avoid taking irbesartan with aliskiren if you have kidney disease.",
        "Tell your doctor if you have ever had:",
        "a heart condition other than one being treated with irbesartan; \nkidney disease (or if you are on dialysis); \nor if you are on a low-salt diet.",
        "Do not use if you are pregnant. Stop using the medicine and tell your doctor right away if you become pregnant. Irbesartan can cause injury or death to the unborn baby if you take the medicine during your second or third trimester."
      ]
    }
  },
  // start from here


  {
    name: "Azilsartan",
    category: "Hypertension",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 138,
    src: "/assets/drugs/Azilsartan.jpg",
    desc: "Azilsartan (INN) is an angiotensin II receptor antagonist used in the treatment of hypertension, developed by Takeda.",
    note: {
      title: "",
      desc: [
        "Azilsartan comes as a tablet to take by mouth. It is usually taken once a day with or without food. To help you remember to take azilsartan, take it around the same time every day. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take azilsartan exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor."
      ]
    }
  },

  {
    name: "Azithromycin",
    category: "Antibiotics and vaccines",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 26,
    src: "/assets/drugs/Azithromycin.jpg",
    desc: "Azithromycin is an antibiotic that fights bacteria.\nAzithromycin is used to treat many different types of infections caused by bacteria, such as respiratory infections, skin infections, ear infections, eye infections, and sexually transmitted diseases.\nAzithromycin may also be used for purposes not listed in this medication guide.",
    note: {
      title: "",
      desc: [
        "You should not use azithromycin if you are allergic to it, or if:",
        "you have ever had jaundice or liver problems caused by taking azithromycin; or you are allergic to similar drugs such as clarithromycin, erythromycin, or telithromycin. To make sure azithromycin is safe for you, tell your doctor if you have ever had:",
        "liver disease;\n kidney disease;\n myasthenia gravis;\n a heart rhythm disorder;\n low levels of potassium in your blood; or\n long QT syndrome (in you or a family member).\n This medicine is not expected to harm an unborn baby. Tell your doctor if you are pregnant or plan to become pregnant.",
        "It is not known whether azithromycin passes into breast milk or if it could harm a nursing baby. Tell your doctor if you are breast-feeding a baby"
      ]
    }
  },

  {
    name: "Blincyto",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 3790,
    src: "/assets/drugs/Blincyto.jpg",
    desc: "BLINCYTO® (blinatumomab) is a prescription medicine used to treat B-cell precursor acute lymphoblastic leukemia (ALL) in patients who still have detectable traces of cancer after chemotherapy..",
    note: {
      title: "",
      desc: [
        "The approval of BLINCYTO® in these patients is based on a study that measured response rate and duration of response. There are ongoing studies to confirm clinical benefit.",
        "BLINCYTO® (blinatumomab) is a prescription medication used to treat a certain type of acute lymphoblastic leukemia (ALL) in adults and children. ALL is a cancer of the blood and bone marrow in which a particular kind of white blood cell is replicating out of control"
      ]
    }
  },

  {
    name: "Cardinal Laboratories Remedy and Recovery Wound and Infection Medication for Pets, 4-Ounce, White (43804)",
    category: "Infection",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 25,
    src: "/assets/drugs/CardinalLaboratories.jpg",
    desc: "Cardinal Laboratories Remedy and Recovery Wound and Infection Medication for Pets, 4-Ounce, White (43804).",
    note: {
      title: "",
      desc: [
        "A Soothing Topical Lotion",
        "For Use On Cuts, Burns, Bites, Stitches & Infections",
        "Kills bacteria that cause infection",
        "Speeds Healing And Return To Healthy Skin",
        "Made In The Usa"
      ]
    }
  },

  {
    name: "Carvedilol",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 2,
    src: "/assets/drugs/Carvedilol.jpg",
    desc: "CARVEDILOL (KAR ve dil ol) treats high blood pressure and heart failure.",
    note: {
      title: "",
      desc: [
        "CARVEDILOL (KAR ve dil ol) treats high blood pressure and heart failure. It may also be used to prevent further damage after a heart attack. It works by lowering your blood pressure and heart rate, making it easier for your heart to pump blood to the rest of your body. It belongs to a group of medications called beta blockers"

        
      ]
    }
  },


  {
    name: "Cefadroxil",
    category: "Antibiotics and vaccines, Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 25,
    src: "/assets/drugs/Cefadroxil.jpg",
    desc: "Antibiotics such as cefadroxil will not work for colds, flu, or other viral infections. Using antibiotics when they are not needed increases your risk of getting an infection later that resists antibiotic treatment.",
    note: {
      title: "",
      desc: [
        "Cefadroxil is used to treat certain infections caused by bacteria such as infections of the skin, throat, tonsils, and urinary tract. Cefadroxil is in a class of medications called cephalosporin antibiotics. It works by killing bacteria."

        
      ]
    }
  },


 {
    name: "chlortalidone",
    category: "Hypertension, Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 21,
    src: "/assets/drugs/chlortalidone.jpeg",
    desc: "Chlorthalidone, a ‘water pill,’ is used to treat high blood pressure and fluid retention caused by various conditions, including heart disease. It causes the kidneys to get rid of unneeded water and salt from the body into the urine. This medicine is sometimes prescribed for other uses; ask your doctor or pharmacist for more information",
    note: {
      title: "",
      desc: [
        "Chlorthalidone comes as a tablet to take by mouth. It usually is taken once a day or every other day after a meal, preferably breakfast. It is best to take this medicine in the morning to avoid going to the bathroom during the night. Follow the directions on your prescription label carefully, and ask your doctor or pharmacist to explain any part you do not understand. Take chlorthalidone exactly as directed. Do not take more or less of it or take it more often than prescribed by your doctor.",
        "Chlorthalidone controls high blood pressure but does not cure it. Continue to take chlorthalidone even if you feel well. Do not stop taking chlorthalidone without talking to your doctor."
      ]
    }
  },

  {
    name: "Chlorthalidone",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 9,
    src: "/assets/drugs/Chlorthalidone.jpg",
    desc: "CHLORTHALIDONE (klor THAL i done) treats high blood pressure.",
    note: {
      title: "",
      desc: [
        "CHLORTHALIDONE (klor THAL i done) treats high blood pressure. It may also be used to reduce swelling related to heart, kidney, or liver disease. It helps your kidneys remove more fluid and salt from your blood through urine. It belongs to a group of medications called diuretics."       
      ]
    }
  },

  {
    name: "Colesevelam",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 14,
    src: "/assets/drugs/Colesevelam.jpg",
    desc: "COLESEVELAM (koh le SEV e lam) is used to lower cholesterol in patients who are at risk of heart disease or stroke.",
    
    note: {
      title: "",
      desc: [
        "COLESEVELAM (koh le SEV e lam) is used to lower cholesterol in patients who are at risk of heart disease or stroke. This medicine is only for patients whose cholesterol level is not controlled by diet. It is also used in combination with diet and exercise to help lower blood sugar in adults with type 2 diabetes."
      ]
    }
  },

  {
    name: "Colestipol",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 11,
    src: "/assets/drugs/Colestipol.jpg",
    desc: "COLESTIPOL (koe LES ti pole) is used to lower cholesterol in patients who are at risk of heart disease or stroke. This medicine is only for patients whose cholesterol level is not controlled by diet.",
    
    note: {
      title: "",
      desc: [
        "COLESTIPOL (koe LES ti pole) is used to lower cholesterol in patients who are at risk of heart disease or stroke. This medicine is only for patients whose cholesterol level is not controlled by diet."
      ]
    }
  },

  {
    name: "CuraLin by Curalife – 100% Natural | 9 Potent Ingredients | (180 Capsules – 30-60 Day Supply)",
    category: "Diabetes",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 75,
    src: "/assets/drugs/CuraLinbyCuralife.jpg",
    desc: "CuraLin by Curalife – 100% Natural | 9 Potent Ingredients | (180 Capsules – 30-60 Day Supply)",
    
    note: {
      title: "",
      desc: [
        "Clinically Tested. 89.5% customer satisfaction. Natural Ingredients. Doctor & Pharmacist Approved, Money Back Guarantee, 100% Natural, Ayurvedic.",
        "700+ Doctors recommend CuraLin to their patients to help get their LIFE BACK! CuraLin works powerfully by blending ancient Ayurveda practices with modern science and technology.",
        "Supported by a Community of over 70,000 people!!!",
        "Natural Ingredients: These 9 Ayurvedic ingredients work synergistically to create a one of a kind supplement: Bitter Melon, Gymnema Sylvestre, Swertia Chirata, Fenugreek, Syzygium Cumini, Turmeric, Amla, Picrorhiza Kurroa, Cinnamon",
        "Best way to see results with CuraLin: 1-2 Easy-to-Take Capsules 30 Minutes After Each Meal"
      ]
    }
  }, 

  {
    name: "Dabigatran",
    category: "Anticoagulants, Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 290,
    src: "/assets/drugs/Dabigatran.jpg",
    desc: "Dabigatran, sold under the brand name Pradaxa among others, is an anticoagulant used to treat and prevent blood clots and to prevent stroke in people with atrial fibrillation. Specifically it is used to prevent blood clots following hip or knee replacement and in those with a history of prior clots.",
    note: {
      title: "",
      desc: [
        "Dabigatran is used to lower the risk of stroke caused by a blood clot in people with a heart rhythm disorder called atrial fibrillation. dabigatran is used when the atrial fibrillation is not caused by a heart valve problem.",
   
      ]
    }
  }, 

  {
    name: "DIOVAN",
    category: "Hypertension",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 76,
    src: "/assets/drugs/DIOVAN.jpg",
    desc: "ACTIVE INGREDIENT: VALSARTAN Diovan – the peripheral vasodilator, has hypotensive effect. The specific blocker of AT1 receptors of angiotensin II, does not inhibit ACE; does not influence the level of general cholesterol, TG, glucose and uric acid in blood",
    note: {
      title: "",
      desc: [
        "Drug Uses",
        "Diovan is an angiotensin II receptor blocker, providing a direct and indirect effect on regulation of blood pressure. Diovan inhibits vasoconstriction, reduces sodium and water retention in the body. Antihypertensive drug Diovan is prescribed to children of 6 years and above, adults and elderly patients for:",
        "treatment of heart failure;",
        "  survival improvement after acute myocardial infarction in clinically stable patients.",
        "Diovan benefits are considered as:",
        "to lower the blood pressure quickly, without changed heart rate in hypertensive patients;",
      "to lower high blood pressure and to reduce the risk of heart damage and further heart problems.",
      "After the intake of Diovan pills, the antihypertensive effect develops within 1.5-2 hours and lasts about 24 hours. The maximum lowering in blood pressure is achieved within 4 weeks of the systematic application of Diovan.",
      "The recommended dose of Diovan for adult hypertensive patients varies between 80mg or 160mg per day. To achieve a greater antihypertensive effect, daily Diovan dose can be increased to 320mg or a diuretic to be included into the antihypertensive therapy (“water pills”).",
      "The pediatric dose of Diovan (from 6 to 16 years) is adjusted on the basis of the child’s bodyweight and makes 1,3 mg per kg. The maximum dose of Diovan for children should not exceed 160mg per day."
   
      ]
    }
  }, 

  {
    name: "Doctor Stephanie’s Nerve Miracle Maximum Strength Supplement – Nerve Health in Legs, Feet, Hands, Toes – Mega Dose of Alpha Lipoic Acid ALA and Vitamin B12",
    category: "Diabetes",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 30,
    src: "/assets/drugs/DoctorStephanie’sNerve.jpg",
    desc: "Doctor Stephanie’s Nerve Miracle Maximum Strength Supplement – Nerve Health in Legs, Feet, Hands, Toes – Mega Dose of Alpha Lipoic Acid ALA and Vitamin B12",
    note: {
      title: "",
      desc: [
       "Mega-Doses of Powerful Antioxidants: Contains 600 mg of potent, high-quality Alpha-Lipoic Acid for nerve health.", 
       "Essential Vitamins: Made with high doses of Vitamin D3 & Vitamin B12.",
       "Pharmacist Formulated: Our formula is based on medical research and backed by an advisory board of top endocrinologists to provide the best combination of ingredients at high enough doses to work.",
       "Made in the US: Our trusted formulas are only made in the USA in a GMP Certified facility. Each item is third-party tested for ingredient quality and safety.",
       "Money-Back Guarantee: Try risk-free with our 60-day satisfaction guarantee. If the product doesn’t work for you, let us know and you’ll get your money back!",
     
   
      ]
    }
  },
  
  {
    name: "Doctor’s Best Benfotiamine, Non-GMO, Vegan, Gluten Free, Soy Free, Helps Maintain Blood Sugar Levels, 300 mg, 60 Veggie Caps (DRB-00270)",
    category: "Diabetes",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 75,
    src: "/assets/drugs/Doctor’sBestBenfotiamine.jpg",
    desc: "Doctor’s Best Benfotiamine, Non-GMO, Vegan, Gluten Free, Soy Free, Helps Maintain Blood Sugar Levels, 300 mg, 60 Veggie Caps (DRB-00270)",
    note: {
      title: "",
      desc: [
       "Doctor?s Best Benfotiamine is a fat-soluble highly bioavailable derivative of thiamine (Vitamin B1).* Benfotiamine is activated in the bloodstream to release thiamine, and remains available in the body four times longer than water-soluble thiamin.* Benfotiamine activates transketolase, a cellular enzyme essential for glucose metabolism pathway.* It helps support the circulatory and nervous systems with radical-scavenging action against oxidative stress, providing a positive influence on Advanced Glycation End products (AGEs).*",
       "GLUCOSE METABOLISM SUPPORT ? Glucose is one of our body?s best sources of energy – and is available through bread, fruits, vegetables and more. Taking Benfotiamine daily can assist in regulating glucose levels, already within normal range, and help to counter the serious health issues related to sustained high blood sugar.*",
       "MANAGE YOUR BLOOD SUGAR ?",
       " Benfotiamine is a fat-soluble derivative of thiamine, a super nutrient linked to maintaining normal glucose levels.* A derivative of thiamine, Benfotiamine is more bioavailable and can be absorbed at higher doses than its counterpart, thiamine. For those with glucose levels within normal range, Benfotiamine can be a powerful tool in supporting healthy blood sugar levels and protecting against oxidative stress.*",
       "MAINTAINS NERVOUS SYSTEM HEALTH ? by taking Benfotiamine the blood levels of vitamin B1 can be boosted, supporting the body?s nerves and nervous system.*",
       "Label images may vary"
      ]
    }
  },

  {
    name: "Doctor’s Best Cinnamon Extract with Cinsulin, Helps Maintain Blood Sugar Levels, Improve Cardiovascular Health, Enhance Insulin Function, Antioxidant, Non-GMO, Vegan, Gluten Free, Soy Free, 250 Mg",
    category: "Diabetes",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 19,
    src: "/assets/drugs/Doctor’sBestCinnamon.jpg",
    desc: "Doctor’s Best Cinnamon Extract with Cinsulin, Helps Maintain Blood Sugar Levels, Improve Cardiovascular Health, Enhance Insulin Function, Antioxidant, Non-GMO, Vegan, Gluten Free, Soy Free, 250 Mg",
    note: {
      title: "",
      desc: [
       "Doctor’s Best Cinnamon Extract with Cinsulin, Helps Maintain Blood Sugar Levels, Improve Cardiovascular Health, Enhance Insulin Function, Antioxidant, Non-GMO, Vegan, Gluten Free, Soy Free, 250 Mg",
       "UNIQUE PROCESS – CinSulin?s patented process uses 100% water to produce a pure extract of cinnamon that ensures the highest quality",
       "Through the patented water extraction process, the beneficial water-soluble compounds are concentrated and the unwanted fat-soluble compounds are reduced.",
       "CLINICAL STUDIES ? show ingredients found in CinSulin can improve the overall health of people that need help to maintain a healthy blood sugar level.",
       "Helps maintain healthy blood sugar levels and improve cardiovascular health, enhance insulin function and aids in more efficient glucose metabolism, also helps lower blood glucose levels",
       " Also displays strong antioxidant activity that helps prevent and stop cell damage caused by oxidative damage from free radicals.",
       "ONE DOSE – of Doctor?s Best Cinnamon capsules contains the concentrated benefits of 10 common cinnamon capsules (500 mg).",
       "During the summer months products may arrive warm but Amazon stores and ships products in accordance with manufacturers’ recommendations, when provided."
      ]
    }
  },
  
  {
    name: "Dopamine Brain Food",
    category: "Mental health",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 28,
    src: "/assets/drugs/DopamineBrainFood.jpeg",
    desc: "Dopamine pills are supplements or drugs used to increase dopamine levels or activity in the brain.They are not made of dopamine itself, since this neurochemical is not effective when administered orally. Natural dopamine is synthesized inside the brain – and it cannot cross the blood brain barrier (BBB) if taken in pill form.",
    note: {
      title: "",
      desc: [
       "One of the most powerful dopamine supplements in the world designed to improve your balance, increase motor function, and improve learning capacity."
      ]
    }
  },


 {
    name: "Dr. Christopher’s Infection 100 caps",
    category: "Infection",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 28,
    src: "/assets/drugs/Dr.Christopher’sInfection.jpg",
    desc: "Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.",
    note: {
      title: "",
      desc: [
       "Item Package Length: 5.08cm",
       "Item Package Width: 5.08cm",
       "Item Package Height: 10.16cm",
       "Model Number: 084783891314"
      ]
    }
  },
  
  {
    name: "Enalapril",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 17,
    src: "/assets/drugs/Enalapril.jpg",
    desc: "ENALAPRIL (e NAL a pril) treats high blood pressure and heart failure.",
    note: {
      title: "",
      desc: [
       "ENALAPRIL (e NAL a pril) treats high blood pressure and heart failure. It may also be used to prevent further damage after a heart attack. It works by relaxing the blood vessels, which helps decrease the amount of work your heart has to do. It belongs to a class of medications called ACE inhibitors."
      ]
    }
  },
  
  {
    name: "Everolimus",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 7990,
    src: "/assets/drugs/Everolimus.jpg",
    desc: "Everolimus is the generic name for the trade name drug Afinitor. In some cases, health care professionals may use the brand name Afinitor when referring to the generic drug name everolimus.",
    note: {
      title: "",
      desc: [
       "Everolimus is an inhibitor of mTOR. mTOR inhibition blocks the translation of genes that regulate cancer cell proliferation. It also results in reduced levels of certain cell growth factors involved in the development of new blood vessels, such as vascular endothelial growth factor (VEGF).",
       "Research continues to identify which cancer may be best treated with targeted therapies and to identify additional targets for more types of cancer."
      ]
    }
  },
  
  {
    name: "ex-lax Regular Strength Constipation Stimulant Laxative Chocolate Pieces, 24 Count",
    category: "Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 2.86,
    src: "/assets/drugs/ex-laxRegularStrength.jpg",
    desc: "How to use Laxative Pills \nTake this medication by mouth as directed by your doctor. If you are self-treating, follow all directions on the product package. If you have any questions, ask your doctor or pharmacist.",
    note: {
      title: "",
      desc: [
       "Ex-Lax provides dependable relief from occasional constipation. Ex-Lax is a stimulant laxative that is guaranteed to work gently and effectively overnight.",
       "Upon consumption, Ex-Lax works fast to produce a bowel movement, generally within 6-12 hours. It’s the stool softener brand you trust and the effective relief you can rely on. Use Ex-Lax stimulant laxatives for no longer than 7 days and for no other purpose than the relief of occasional constipation, unless directed otherwise by a doctor. ",
       "The common causes of constipation can vary from person to person. Some causes can be changes to what a person eats, not enough water or fiber in a person’s diet, and/or stress. So no matter what type of constipation relief you need, Ex-Lax has a product for you. Ex-Lax comes in a variety of strengths, sizes, and forms, including regular and maximum strength, 24 and 48 Count sizes, and chocolate laxative and laxative pills.",
       "Try Ex-Lax today for fast and effective relief!",
       "Oral laxative that gently promotes regularity and Sodium free",
       "Gentle overnight relief you can trust For adults 12 years and older",
       "Available in a 24 Count size"
      ]
    }
  },
  
  {
    name: "Ezetimibe",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 14,
    src: "/assets/drugs/Ezetimibe.jpg",
    desc: "EZETIMIBE (ez ET i mibe) treats high cholesterol.",
    note: {
      title: "",
      desc: [
       "EZETIMIBE (ez ET i mibe) treats high cholesterol. It works by reducing the amount of cholesterol absorbed from the food you eat. This decreases the amount of bad cholesterol (such as LDL) in your blood. Changes to diet and exercise are often combined with this medication"
      ]
    }
  },


   {
    name: "Fenofibrate",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 12,
    src: "/assets/drugs/Fenofibrate.jpg",
    desc: "FENOFIBRATE (fen oh FYE brate) treats high cholesterol and triglyceride levels in your blood.",
    note: {
      title: "",
      desc: [
       "FENOFIBRATE (fen oh FYE brate) treats high cholesterol and triglyceride levels in your blood. It works by decreasing bad cholesterol and fats (such as LDL, triglycerides) and increasing good cholesterol (HDL) in your blood. It belongs to a group of medications called fibrates. Changes to diet and exercise are often combined with this medication."
      ]
    }
  },
  
  {
    name: "GABA (PharmaGABA), L-Theanine, 5-HTP + Chamomile – Calm, Mood + Serotonin Support Supplement – Non-GMO + Soy Free (60 Capsules)",
    category: "Depression",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 60,
    src: "/assets/drugs/GABA(PharmaGABA).jpg",
    desc: "L-Theanine, 5-HTP + Chamomile – Calm, Mood + Serotonin Support Supplement – Non-GMO + Soy Free (60 Capsules)",
    note: {
      title: "",
      desc: [
       "A formulary blend of nutrients designed to support calming brain activity Improves mood, Reduces craving,  Supports greater feelings of calm, satiety, and satisfaction"
      ]
    }
  },
  
  {
    name: "Gemfibrozil",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 14,
    src: "/assets/drugs/Gemfibrozil.jpg",
    desc: "GEMFIBROZIL (jem FI broe zil) can help lower blood fats and cholesterol for people who are at risk of getting inflammation of the pancreas (pancreatitis) from having very high amounts of fats in their blood.",
    note: {
      title: "",
      desc: [
       "GEMFIBROZIL (jem FI broe zil) can help lower blood fats and cholesterol for people who are at risk of getting inflammation of the pancreas (pancreatitis) from having very high amounts of fats in their blood. This medicine is only for patients whose blood fats are not controlled by diet."
      ]
    }
  },
  
  {
    name: "Hydralazine",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 1,
    src: "/assets/drugs/Hydralazine.jpg",
    desc: "HYDRALAZINE (hye DRAL a zeen) treats high blood pressure.",
    note: {
      title: "",
      desc: [
       "HYDRALAZINE (hye DRAL a zeen) treats high blood pressure. It works by relaxing blood vessels, which decreases blood pressure and the amount of work the heart has to do."
      ]
    }
  },
  
  {
    name: "Hydrochlorothiazide",
    category: "High blood pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount: 4,
    src: "/assets/drugs/Hydrochlorothiazide.jpg",
    desc: "HYDROCHLOROTHIAZIDE (hye droe klor oh THYE a zide) treats high blood pressure.",
    note: {
      title: "",
      desc: [
       "HYDROCHLOROTHIAZIDE (hye droe klor oh THYE a zide) treats high blood pressure. It may also be used to reduce swelling related to heart, kidney, or liver disease. It helps your kidneys remove more fluid and salt from your blood through the urine. It belongs to a group of medications called diuretics."
      ]
    }
  },
  
  {
    name: "Icosapent Ethyl",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:77 ,
    src: "/assets/drugs/IcosapentEthyl.jpg",
    desc: "ICOSAPENT ETHYL (eye KOE sa pent eth il) contains essential fats.",
    note: {
      title: "",
      desc: [
       "ICOSAPENT ETHYL (eye KOE sa pent eth il) contains essential fats. It is used to treat high triglyceride levels. Diet and lifestyle changes are often used with this drug."
      ]
    }
  },

  {
    name: "Imatinib",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:189,
    src: "/assets/drugs/Imatinib.jpg",
    desc: "This medication is used to treat certain types of cancer (such as acute lymphoblastic leukemia, chronic myeloid leukemia, gastrointestinal stromal tumors, and myelodysplastic/myeloproliferative diseases).\nMay Treat: Aggressive systemic mastocytosis · Philadelphia chromosome positive ALL · Accelerated phase Philadelphia chromosome (+) CML · Adjuvant therapy of CD117+ gastrointest stromal tumor · Chronic eosinophilic leukemia",
    note: {
      title: "",
      desc: [
       "Imatinib 100mg Tablet should be taken with food, but better to have it same time every day to get the most benefit. You should continue to take it as long as your doctor advises for it. The duration of treatment varies according to your need and response to treatment. Taking it in the wrong way or taking too much can cause very serious side effects. It may take several weeks or months for you to see or feel the benefits but do not stop taking it unless your doctor tells you to.",
       "The most common side effects of this medicine include edema, nausea, vomiting, muscle cramps, musculoskeletal pain, diarrhea, rash, fatigue, and abdominal pain. Let your doctor know if you experience unexpected rapid weight gain. Your doctor may advise for regular monitoring of blood cells and liver function while you are taking this medicine. Do not drive or do anything requiring mental focus if you experience dizziness and blurry vision.",
       "Many other medicines can affect, or be affected by, this medicine so let your healthcare team know all medications you are using. This medicine is not recommended during pregnancy or while breastfeeding. The use of effective contraception by both males and females during treatment is important to avoid pregnancy."
      ]
    }
  },
  
  {
    name: "INF Formula (Formerly Infection Formula), 100 Caps (3 Pack)",
    category: "Infection",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:50,
    src: "/assets/drugs/INFFormula.jpg",
    desc: "INF Formula (Formerly Infection Formula), 100 Caps (3 Pack)",
    note: {
      title: "",
      desc: [
       "Item Form Capsule Brand Christopher’s Original Formul Dosage Form Capsule   Unit Count 300 Count"
      ]
    }
  },
  
  {
    name: "Janumet",
    category: "Antidiabetics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:252,
    src: "/assets/drugs/Janumet.jpg",
    desc: "This combination medication is used with a proper diet and exercise program and possibly with other medications to control high blood sugar. It is used in patients with type 2 diabetes",
    note: {
      title: "",
      desc: [
       " Janumet contains a combination of metformin and sitagliptin. Metformin and sitagliptin are oral diabetes medicines that help control blood sugar levels.",
       "Metformin works by decreasing glucose (sugar) production in the liver and decreasing absorption of glucose by the intestines. Sitagliptin works by regulating the levels of insulin your body produces after eating.",
       "Janumet is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus.",
       "Janumet is not used to treat type 1 diabetes."
      ]
    }
  },

  {
    name: "Jarrow Formulas Saccharomyces Boulardii + MOS – 5 Billion Viable Organisms Per Serving – 90 Delayed Release Veggie Caps – Probiotic + Prebiotic – Intestinal Tract Support – Up to 90 Servings",
    category: "Infection",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:17,
    src: "/assets/drugs/JarrowFormulas.jpg",
    desc: "Jarrow Formulas Saccharomyces Boulardii + MOS – 5 Billion Viable Organisms Per Serving – 90 Delayed Release Veggie Caps – Probiotic + Prebiotic – Intestinal Tract Support – Up to 90 Servings",
    note: {
      title: "",
      desc: [
       " Intestinal Tract Support – Saccharomyces Boulardii + MOS is a clinically documented probiotic yeast that provides a synergistic effect in the intestinal tract.* Formula does not require refrigeration.",
       "Probiotic + Prebiotic – Saccharomyces boulardii (probiotic yeast) helps protect and maintain intestinal microflora & restore normal intestinal microflora when possible disruptions occur, such as during travel.*",
       "MOS – MOS is a prebiotic that encourages the clearance of certain bacteria through the gut. MOS is a binding site decoy for unfriendly bacteria. 5 Billion CFU – Delivers a minimum of 5 billion viable cells at time of consumption (when kept under recommended storage conditions & used within Best Used Before date).",
       "Rated #1 – With innovative, science-based probiotic products that consumers trust, Jarrow Formulas has again been recognized as the #1 probiotic brand for customer satisfaction according to ConsumerLab?s Survey of Supplement Users for 2021."
      ]
    }
  },
  
  {
    name: "Lenvima",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:6950,
    src: "/assets/drugs/Lenvima.webp",
    desc: "Generic name: lenvatinib (len VA ti nib) Brand names: Lenvima Drug class: Multikinase inhibitors, VEGF/VEGFR inhibitors",
    note: {
      title: "",
      desc: [
       " Lenvima (lenvatinib) is a kinase inhibitor used to treat certain types of cancer. Kinase inhibitors are enzyme inhibitors that blocks the action of one or more protein kinases which interferes with the growth and spread of cancer cells in the body."
      ]
    }
  },
  
  {
    name: "Levalbuterol Hcl",
    category: "Respiratory, Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:62.5,
    src: "/assets/drugs/LevalbuterolHcl.jpg",
    desc: "Levalbuterol is used to prevent or relieve the wheezing, shortness of breath, coughing, and chest tightness caused by lung disease such as asthma and chronic obstructive pulmonary disease (COPD; a group of diseases that affect the lungs and airways). Levalbuterol is in a class of medications called beta agonists. It works by relaxing and opening air passages to the lungs to make breathing easier.",
    note: {
      title: "",
      desc: [
       " Before you use levalbuterol for the first time, read the written instructions that come with the inhaler or nebulizer. Ask your doctor, pharmacist, or respiratory therapist to show you how to use it. Practice using the inhaler or nebulizer while he or she watches."
      ]
    }
  },
  
  {
    name: "Lexapro",
    category: "Mental health",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:60,
    src: "/assets/drugs/Lexapro.jpg",
    desc: "Lexapro (escitalopram) is an antidepressant belonging to a group of drugs called selective serotonin reuptake inhibitors (SSRIs). Escitalopram affects the levels of certain chemicals in the brain that may be altered in people suffering from depression or anxiety.  Lexapro is used to treat major depressive disorder in adults and adolescents at least 12 years old.Lexapro is also used to treat anxiety in adults.",
    note: {
      title: "",
      desc: [
       " Ask your doctor before taking a nonsteroidal anti-inflammatory drug (NSAID) such as aspirin, ibuprofen (Advil, Motrin), naproxen (Aleve), celecoxib (Celebrex), diclofenac, indomethacin, meloxicam, and others. Using an NSAID with Lexapro may cause you to bruise or bleed easily.",
       "Avoid alcohol.",
       "Avoid driving or hazardous activity until you know how this medicine will affect you. Your reactions could be impaired."
      ]
    }
  },
  
  {
    name: "LifeSeasons – Anxie-T – Herbal Stress Relief Supplement to Relax and Calm Mind – Contains Ashwagandha, Kava Kava, GABA, L-Theanine – 60 Capsules",
    category: "Depression",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:60,
    src: "/assets/drugs/LifeSeasons.jpg",
    desc: "LifeSeasons – Anxie-T – Herbal Stress Relief Supplement to Relax and Calm Mind – Contains Ashwagandha, Kava Kava, GABA, L-Theanine – 60 Capsules",
    note: {
      title: "",
      desc: [
       " Feel More Calm And Relaxed: Anxie-T, our supplement for stress, nourishes the nervous system and supports the body’s natural ability to deal with stress, nervousness, stress-related sleep problems and more, providing a sense of well-being.",
       "Same-Day Natural Results: Anxie-T stress supplements can provide same-day results, including a feeling of calm without feeling tired. Through the use of Ashwagandha, GABA, Kava Kava, Theobromine, and L-Theanine, Anxie-T provides a feeling of relaxation that continues throughout the day, helping with normal activities and sleep.",
       "Live Healthier And Happier: Take two Anxie-T stress support supplement capsules each morning, with or without food. Another capsule may be added in the evening for additional support. Talk to your healthcare provider about the serving size that is right for your body.",
       "One Unique Blend: Achieving a change in our health requires the right ingredients in the right doses and combinations. This used to require purchasing many individual vitamins, minerals, herbs, and nutrients to create an effective protocol. LifeSeasons was created to put that protocol into one bottle, making it easier (and more affordable) to get the full benefits of what nature and science has to offer.",
       "The LifeSeasons Standard: LifeSeasons formulates products that combine nature and science to help each person build a foundation for good health. Our ingredients are put through a rigorous testing process to ensure that they are pure, potent, and effective ? giving you products to help you achieve your best health results."
      ]
    }
  },
  
  {
    name: "Lisinopril",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:4,
    src: "/assets/drugs/Lisinopril.jpg",
    desc: "LISINOPRIL (lyse IN oh pril) treats high blood pressure and heart failure.",
    note: {
      title: "",
      desc: [
       " LISINOPRIL (lyse IN oh pril) treats high blood pressure and heart failure. It may also be used to prevent further damage after a heart attack. It works by relaxing blood vessels, which decreases the amount of work the heart has to do. It belongs to a group of medications called ACE inhibitors."
      ]
    }
  }, 

  {
    name: "Losartan",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:12,
    src: "/assets/drugs/Losartan.jpg",
    desc: "LOSARTAN (loe SAR tan) treats high blood pressure.",
    note: {
      title: "",
      desc: [
       " LOSARTAN (loe SAR tan) treats high blood pressure. It may also be used to prevent a stroke in people with heart disease and high blood pressure. It can be used to prevent kidney damage in people with diabetes. It works by relaxing the blood"
      ]
    }
  },
  
  {
    name: "Losartan",
    category: "Hypertension",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:6,
    src: "/assets/drugs/LosartanNG.jpg",
    desc: "Losartan is used to treat high blood pressure (hypertension) and to help protect the kidneys from damage due to diabetes. It is also used to lower the risk of strokes in patients with high blood pressure and an enlarged heart.",
    note: {
      title: "",
      desc: [
       "Losartan belongs to a group of drugs called angiotensin II receptor antagonists. It keeps blood vessels from narrowing, which lowers blood pressure and improves blood flow.",
       "Losartan is used to treat high blood pressure (hypertension). It is also used to lower the risk of stroke in certain people with heart disease.",
       "Losartan is used to slow long-term kidney damage in people with type 2 diabetes who also have high blood pressure."
      ]
    }
  }, 

  {
    name: "Lovastatin",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:10,
    src: "/assets/drugs/Lovastatin.jpg",
    desc: "LOVASTATIN (LOE va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke.",
    note: {
      title: "",
      desc: [
       "LOVASTATIN (LOE va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke. It works by decreasing bad cholesterol and fats (such as LDL, triglycerides), and increasing good cholesterol (HDL) in your blood. It belongs to a group of medications called statins. Changes to diet and exercise are often combined with this medication."
      ]
    }
  }, 
  
  {
    name: "Metagenics Serenagen? ? Traditional Herbal Stress Management Formula* (180 Tablets)",
    category: "depression",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:80,
    src: "/assets/drugs/MetagenicsSerenagen.jpg",
    desc: "Metagenics Serenagen? ? Traditional Herbal Stress Management Formula* (180 Tablets)",
    note: {
      title: "",
      desc: [
       "Metagenics Serenagen? ? Traditional Herbal Stress Management Formula* (180 Tablets)"
      ]
    }
  },
  
  {
    name: "Metformin",
    category: "Antidiabetics, Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:8.5,
    src: "/assets/drugs/Metformin.jpg",
    desc: "Metformin is an oral diabetes medicine that helps control blood sugar levels",
    note: {
      title: "",
      desc: [
       "Metformin is used with a proper diet and exercise program and possibly with other medications to control high blood sugar in people with type 2 diabetes."
      ]
    }
  }, 
  
  {
    name: "Metoprolol Succinate",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:14,
    src: "/assets/drugs/MetoprololSuccinate.jpg",
    desc: "METOPROLOL (me TOE proe lole) treats high blood pressure and heart failure.",
    note: {
      title: "",
      desc: [
       "METOPROLOL (me TOE proe lole) treats high blood pressure and heart failure. It may also be used to prevent chest pain (angina). It works by lowering your blood pressure and heart rate, making it easier for your heart to pump blood to the rest of your body. It belongs to a group of medications called beta blockers"
      ]
    }
  },
  
  {
    name: "Metoprolol Tartrate",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:2,
    src: "/assets/drugs/MetoprololTartrate.jpg",
    desc: "METOPROLOL (me TOE proe lole) treats high blood pressure.",
    note: {
      title: "",
      desc: [
       "METOPROLOL (me TOE proe lole) treats high blood pressure. It also prevents chest pain (angina) or further damage after a heart attack. It works by lowering your blood pressure and heart rate, making it easier for your heart to pump blood to the rest of your body. It belongs to a group of medications called beta blockers."
      ]
    }
  },
  
  {
    name: "Mood Support – 100% Plant-Based Mood and Stress Support Supplement – Natural Adaptogenic Mood Booster with Ashwagandha and Rhodiola Rosea to Help Relax Mind | Contains 12 Powerful Herbs",
    category: "Depression",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:18,
    src: "/assets/drugs/MoodSupport.jpg",
    desc: "Mood Support – 100% Plant-Based Mood and Stress Support Supplement – Natural Adaptogenic Mood Booster with Ashwagandha and Rhodiola Rosea to Help Relax Mind | Contains 12 Powerful Herbs",
    note: {
      title: "",
      desc: [
       "Mood Support – 100% Plant-Based Mood and Stress Support Supplement – Natural Adaptogenic Mood Booster with Ashwagandha and Rhodiola Rosea to Help Relax Mind | Contains 12 Powerful Herbs"
      ]
    }
  },
  
   {
    name: "Nature’s Way Completia Diabetic Multivitamin, High Potency B-Vitamins. 90 Tablets",
    category: "Diabetes",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:22,
    src: "/assets/drugs/Nature’sWay.jpg",
    desc: "Nature’s Way Completia Diabetic Multivitamin, High Potency B-Vitamins. 90 Tablets",
    note: {
      title: "",
      desc: [
       "Complete multivitamin for people with diabetes.   Formulated with high potency B-vitamins and antioxidant vitamins A, C, E, and selenium.*  With special Diabetic Support Blend and Antioxidant Activity Support Blends featuring beneficial ingredients including alpha lipoic acid, cinnamon, and fenugreek.",
       "No iron added.",
       "No yeast-derived ingredients, dairy, or artificial colors."
      ]
    }
  },
  
  {
    name: "Neosporin",
    category: "Antibiotics and vaccines",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:6,
    src: "/assets/drugs/Neosporin.jpg",
    desc: "Helps prevent and temporarily protects and helps relieve chapped or cracked lips. Clinically shown to restore visibly healthier lips in 3 days by reducing the signs and symptoms of dryness, such as scaling and chapping. Its unique formula of emollients, nutrients, and vitamins penetrates deep within the skin surface and works during the body’s natural recovery process while you sleep, resulting in softer, smoother lips every day.",
    note: {
      title: "",
      desc: [
       "Replenish your kit of first-aid essentials with this nourishing cleanser that wards off infection while creating an optimal environment for healing."
      ]
    }
  },
  
  {
    name: "Neosporin Original First Aid Antibiotic Ointment with Bacitracin Zinc for Infection Protection, Wound Care Treatment & Scar Appearance Minimizer for Minor Cuts, Scrapes and Burns, 1 oz",
    category: "Infection",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:13,
    src: "/assets/drugs/NeosporinOriginal.jpg",
    desc: "Neosporin Original First Aid Antibiotic Ointment with Bacitracin Zinc for Infection Protection, Wound Care Treatment & Scar Appearance Minimizer for Minor Cuts, Scrapes and Burns, 1 oz",
    note: {
      title: "",
      desc: [
       "1-ounce of Neosporin Original Topical Antibiotic Ointment for treating minor cuts, scrapes and burns  Wound care ointment is formulated with neomycin sulfate, bacitracin zinc and polymyxin B antibiotic ingredients to provide 24-hour infection protection for minor wounds",
       "Topical first-aid ointment nourishes skin to minimize the appearance of scars after healing  Contains HeliDerm Technology that provides a nourishing environment for skin to heal, resulting in healthier looking skin after use  To use, apply a small amount of the first-aid antibiotic ointment to the affected area one to three times daily; Cover the wound with a Band-Aid Brand Adhesive Bandage for extra protection"
      ]
    }
  },
  
  {
    name: "Niacin (rx)",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:28,
    src: "/assets/drugs/Niacin(rx).jpg",
    desc: "NIACIN (NYE a sin) is used in combination with a healthy diet to lower bad cholesterol and increase good cholesterol",
    note: {
      title: "",
      desc: [
       "NIACIN (NYE a sin) is used in combination with a healthy diet to lower bad cholesterol and increase good cholesterol. This medicine is also used to decrease triglycerides. If triglycerides are too high, you may be at risk of developing pancreatitis. This is a painful condition that causes inflammation of the pancreas and can lead to serious health problems. This medicine can also be helpful in patients who have heart disease or who have had a heart attack."
      ]
    }
  },
  
  {
    name: "Nifedipine (xl)",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:14,
    src: "/assets/drugs/Nifedipine.jpg",
    desc: "IFEDIPINE (nye FED i peen) is a calcium channel blocker.",
    note: {
      title: "",
      desc: [
       "IFEDIPINE (nye FED i peen) is a calcium channel blocker. It relaxes your blood vessels and decreases the amount of work the heart has to do. It treats high blood pressure and/or prevents chest pain (also called angina)."
      ]
    }
  }, 
  
  {
    name: "NITROFURANTOIN",
    category: "Antibiotics and vaccines",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:12,
    src: "/assets/drugs/NITROFURANTOIN.jpg",
    desc: " NITROFURANTOIN is an antibiotic. It is used to treat urinary tract infections",
    note: {
      title: "",
      desc: [
       "What is nitrofurantoin (Macrobid)?  How nitrofurantoin (Macrobid) works   Nitrofurantoin (Macrobid) is a nitrofuran antibiotic. The antibiotic collects in your urine and kills bacteria in the urinary tract. It works by stopping the bacteria from making nutrients they need to survive and protect themselves.   What is nitrofurantoin (Macrobid) used for   Treatment of urinary tract infections   Prevention of urinary tract infections  Nitrofurantoin (Macrobid) dosage forms  capsule icon Capsule  100mg   Typical dosing for nitrofurantoin (Macrobid   Treatment of UTI   Macrobid capsules and its generics: Adults and children over 12 years old should take 100 mg by mouth every 12 hours with food for 7 days.  Macrodantin capsules, Furadantin oral suspension, and their generics: Adults should take 50 mg to 100 mg (or 10 mL to 20 mL) by mouth four times a day with food. The dose for children will depend on their weight, typically 1.25 mg/kg to 1.75 mg/kg of body weight (or about 2.5 mL to 10 mL) by mouth four times day with food. This medication should be taken for 7 days or for at least 3 days after you have a urine test free of bacteria   Prevention of UTI   Macrodantin capsules, Furadantin oral suspension, and their generics: Adults should take 50 mg to 100 mg (or 10 mL to 20 mL) by mouth once a day at bedtime with food. The dose for children will depend on their weight, typically 1 mg/kg of body weight by mouth total per day with food.  Macrobid and its generics are not FDA-approved for use in children under 12 years old.  Macrodantin capsules, Furadantin oral suspension, and their generics are not FDA-approved for use in children under 1 month of age."
      ]
    }
  },
  
  {
    name: "Non GMO Cranberry Concentrate Supplement Pills for Urinary Tract Infection UTI.",
    category: "Infection",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:19,
    src: "/assets/drugs/NonGMOCranberry.jpg",
    desc: " ? UNLIKE SOME CRANBERRY SUPPLEMENTS on the market that are large tablets or capsules, stink, hard to swallow, less potent, cheap, or not effective at all.",
    note: {
      title: "",
      desc: [
       "? UNLIKE SOME CRANBERRY SUPPLEMENTS on the market that are large tablets or capsules, stink, hard to swallow, less potent, cheap, or not effective at all, OUR Pure Healthland brand cranberry concentrate supplement SOFTGELS are SMALL, EASY TO SWALLOW, HIGH POTENCY, NON-GMO, and EFFECTIVE with thousands of happy customers over 6 years. Proudly Made in USA! ?"
      ]
    }
  },
  
  {
    name: "NOW Supplements, AlliBiotic CF?, with Garlic Extract, Olive Leaf Extract, Elderberry & Oregano, Non-Drowsy Formula, 60 Softgels.",
    category: "Infection",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:11,
    src: "/assets/drugs/NOWSupplements.jpg",
    desc: "NOW Supplements, AlliBiotic CF?, with Garlic Extract, Olive Leaf Extract, Elderberry & Oregano, Non-Drowsy Formula, 60 Softgels",
    note: {
      title: "",
      desc: [
       "",
      ]
    }
  },
  
  {
    name: "Nutrisuppz Formula 900mg With Gaba, L-Theanine, 5-HTP, Ashwagandha, Chamomile, 60 Caps",
    category: "depression",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:17,
    src: "/assets/drugs/NutrisuppzFormula.jpg",
    desc: "Nutrisuppz Formula 900mg With Gaba, L-Theanine, 5-HTP, Ashwagandha, Chamomile, 60 Caps",
    note: {
      title: "",
      desc: [
       "STRESS RELIEF FORMULA: Our stress relief supplement is your always by your side to support you in overwhelming situations when you think you cannot handle it. This stress reliever combines natural ingredients to help you pause your mind and alleviate stress. CALMING YOUR MIND: The stress-reducing supplements combine mood enhancers whit natural stress-relieving ingredients to help you calm your mind and body until you are ready to continue again. It can stimulate your focus and concentration, so you can shift your attention to the things that matter.  ORGANIC INGREDIENTS: We acknowledge the effect of stress and temporary panic over the mind and body. That is why we brought nature?s top ingredients in one formula for our stress reliever: ashwagandha, L-theanine, Rhodiola, and others, to help you calm your mind and body.  HEALTH BENEFITS: Ashwagandha is known for its stress balancing effects, and together with Rhodiola and L-theanine, our stress relief supplement can help you maintain a good general mood and a positivity sense, promotes relaxation, and boosts your energy, so you can feel prepared to deal with external factors.   ADMINISTRATION METHOD: The stress-reducing supplements are non-GMO, with no soy or gluten, safe for all consumers. The recommended dose is to take 2 capsules daily with a meal or how the specialist advises you to do.STRESS RELIEF FORMULA: Our stress relief supplement is your always by your side to support you in overwhelming situations when you think you cannot handle it. This stress reliever combines natural ingredients to help you pause your mind and alleviate stress.  CALMING YOUR MIND: The stress-reducing supplements combine mood enhancers whit natural stress-relieving ingredients to help you calm your mind and body until you are ready to continue again. It can stimulate your focus and concentration, so you can shift your attention to the things that matter.  ORGANIC INGREDIENTS: We acknowledge the effect of stress and temporary panic over the mind and body. That is why we brought nature?s top ingredients in one formula for our stress reliever: ashwagandha, L-theanine, Rhodiola, and others, to help you calm your mind and body.   HEALTH BENEFITS: Ashwagandha is known for its stress balancing effects, and together with Rhodiola and L-theanine, our stress relief supplement can help you maintain a good general mood and a positivity sense, promotes relaxation, and boosts your energy, so you can feel prepared to deal with external factors.  ADMINISTRATION METHOD: The stress-reducing supplements are non-GMO, with no soy or gluten, safe for all consumers. The recommended dose is to take 2 capsules daily with a meal or how the specialist advises you to do.",
      ]
    }
  },
  
  {
    name: " Nutrivein Organic Sea Moss 1600mg Plus Bladderwrack & Burdock – 120 Capsules – Prebiotic Super Food Boosts The Immune System & Digestive Health – Thyroid, Healthy Skin, Keto Detox, Gut, Joint Support",
    category: "diabetes",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:20,
    src: "/assets/drugs/NutriveinOrganic.jpg",
    desc: "Nutrivein Organic Sea Moss 1600mg Plus Bladderwrack & Burdock – 120 Capsules – Prebiotic Super Food Boosts The Immune System & Digestive Health – Thyroid, Healthy Skin, Keto Detox, Gut, Joint Support",
    note: {
      title: "",
      desc: [
       "? IRISH SEA MOSS BOOSTS THE IMMUNE SYSTEM – For hundreds of years seamoss, a type of red algae sometimes known as Carrageen, has been used to boost the immune system, which defends against the common cold. Nutrivein Sea Moss is loaded with magnesium, phosphorus, Vitamin A, Vitamin K, and Omega-3 Fatty Acids – All vitamins and minerals that the immune system needs for optimal function. It’s also a great source of Iodine, a thyroid booster, without the negative effects of eating salt    ? DETOX AND CLEANSE YOUR BODY NATURALLY – Nutrivein Sea Moss botanicals supports and encourages proper digestion by feeding the good probiotic bacteria in your stomach and maintain gut health microbiome. Improves digestion, heals the guts lining, and helps expel harmful bacteria.    ? IMPROVED MOOD AND ENERGY LEVELS – Nutrivein Sea Moss contains significant amounts of riboflavin & folate which are known as Vitamins B2 and B9. Folate is also an essential prenatal vitamin, and when combined with B12 promotes red blood cell creation. It also delivers potassium and magnesium nutrients, known mood boosters that play an important role in healthy brain function and improved focus   ? RICH SOURCE OF FIBER TO MAINTAIN REGULARITY, IMPROVE DIGESTION & INCREASE METABOLISM – Nutrivein Irish Sea Moss is a mucilaginous powder superfood supplement that turns to a soft-gel consistency during digestion, helping you feel full while easing the movement through the digestive system and GI tract/bowels. Sea Moss is similar to other highly recommended fibers like chia seeds, flax seeds and aloe. Great for all of your body’s mucous membranes, including the respiratory system.  ? ALLERGEN FREE & GUARANTEED SATISFACTION -Our advanced organic formula is 3rd-party tested, Made in USA, GMP-certified facility. Our supplement is 100% natural product and contains ZERO binders, allergens, stearates, dioxides, lactose, artificial ingredients or preservatives. You’ll be completely satisfied or we’ll gladly refund your money. 120 Capsules – a 60 day supply with a recommended dose of 2 pills daily. Safe for Kids and Adults, for Men and Women of All Ages.",
      ]
    }
  },

  {
    name: " Omega-3 Acid Ethyl Esters (lovaza)",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:2,
    src: "/assets/drugs/Omega-3Acid.jpg",
    desc: "FISH OIL, OMEGA-3 FATTY ACIDS (Fish Oil, oh MAY ga 3 fatty AS ids) are essential fats.",
    note: {
      title: "",
      desc: [
       "FISH OIL, OMEGA-3 FATTY ACIDS (Fish Oil, oh MAY ga 3 fatty AS ids) are essential fats. It is used to treat high triglyceride levels.",
      ]
    }
  },
  
  {
    name: " Percocet",
    category: "pain",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:8,
    src: "/assets/drugs/Percocet.png",
    desc: "Percocet contains a combination of acetaminophen and oxycodone. Oxycodone is an opioid pain medication. An opioid is sometimes called a narcotic. Acetaminophen is a less potent pain reliever that increases the effects of oxycodone.  Percocet is used to relieve moderate to severe pain.   Due of the risks of addiction, abuse, and misuse, even at recommended doses, Percocet is only prescribed when treatment with non-opioid pain relieving medication has not been tolerated or has not provided adequate pain relief.",
    note: {
      title: "",
      desc: [
       "How should I take Percocet?   Take Percocet exactly as prescribed by your doctor. Follow all directions on your prescription label. Never take this medicine in larger amounts, or for longer than prescribed. An overdose can damage your liver or cause death. Tell your doctor if you feel an increased urge to use more of this medicine. Never share this medicine with another person, especially someone with a history of drug abuse or addiction. MISUSE CAN CAUSE ADDICTION, OVERDOSE, OR DEATH. Keep the medicine in a place where others cannot get to it. Selling or giving away Percocet is against the law.   If you need surgery or medical tests, tell the doctor ahead of time that you are using Percocet.   You should not stop using Percocet suddenly. Follow your doctor’s instructions about tapering your dose.   Store at room temperature away from moisture and heat. Keep track of your medicine. You should be aware if anyone is using it improperly or without a prescription.",
      ]
    }
  },

  {
    name: "Pravastatin",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:7,
    src: "/assets/drugs/Pravastatin.jpg",
    desc: "PRAVASTATIN (PRA va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke.",
    note: {
      title: "",
      desc: [
       "PRAVASTATIN (PRA va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke. It works by decreasing bad cholesterol and fats (such as LDL, triglycerides), and increasing good cholesterol (HDL) in your blood. It belongs to a group of medications called statins. Changes to diet and exercise are often combined with this medication.",
      ]
    }
  }, 

  {
    name: "Premium Blood Sugar Support Supplement by PurePremium (Non-GMO) Support Glucose Metabolism",
    category: "diabetes",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:17,
    src: "/assets/drugs/PremiumBloodSugar.jpg",
    desc: "Premium Blood Sugar Support Supplement by PurePremium (Non-GMO) Support Glucose Metabolism",
    note: {
      title: "",
      desc: [
       "Support & blood sugar levels within the normal range, the PurePremium blood sugar support dietary supplement, which contains essential vitamins, minerals and herbs. Support healthy glucose metabolism by adding our all-natural supplement to your diet. Our advanced glucose metabolism support capsules contain cinnamon, mulberry leaf, vitamin C, vitamin E, magnesium, zinc, licorice root extract and manganese.  Supports healthy blood sugar levels already within a normal range. Our easy-to-swallow capsules support healthy glucose levels and your metabolism at the same time. Formulated in the USA. Every PurePremium product comes from an inspected, and GMP certified facility right here in the USA",
      ]
    }
  }, 
  
  {
    name: "Quinapril",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:7,
    src: "/assets/drugs/Quinapril.jpg",
    desc: "QUINAPRIL (KWIN a pril) is an ACE inhibitor. It treats high blood pressure and heart failure.",
    note: {
      title: "",
      desc: [
       "QUINAPRIL (KWIN a pril) is an ACE inhibitor. It treats high blood pressure and heart failure.",
      ]
    }
  },
  
  {
    name: "Repatha Sureclick",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:515,
    src: "/assets/drugs/RepathaSureclick.jpg",
    desc: "EVOLOCUMAB (e voe LOK ue mab) treats high cholesterol. It is used with lifestyle changes, like diet and exercise.",
    note: {
      title: "",
      desc: [
       "EVOLOCUMAB (e voe LOK ue mab) treats high cholesterol. It is used with lifestyle changes, like diet and exercise. It is used alone or with other medicines.",
      ]
    }
  },
  
  {
    name: "Rosuvastatin",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:11,
    src: "/assets/drugs/Rosuvastatin.jpg",
    desc: "ROSUVASTATIN (roe SOO va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke.",
    note: {
      title: "",
      desc: [
       "ROSUVASTATIN (roe SOO va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke. It works by decreasing bad cholesterol and fats (such as LDL, triglycerides), and increasing good cholesterol (HDL) in your blood. It belongs to a group of medications called statins. Changes to diet and exercise are often combined with this medication.",
      ]
    }
  }, 
  
  {
    name: "Simvastatin",
    category: "High cholesterol",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:8,
    src: "/assets/drugs/Simvastatin.jpg",
    desc: "SIMVASTATIN (SIM va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke.",
    note: {
      title: "",
      desc: [
       "SIMVASTATIN (SIM va sta tin) treats high cholesterol and reduces the risk of heart attack and stroke. It works by decreasing the bad cholesterol and fats (such as LDL, triglycerides), and increasing good cholesterol (HDL) in your blood. It belongs to a group of medications called statins. Changes to diet and exercise are often combined with this medication",
      ]
    }
  },
  
  {
    name: "Spironolactone",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:7,
    src: "/assets/drugs/Spironolactone.jpg",
    desc: "SPIRONOLACTONE (speer on oh LAK tone) treats high blood pressure and heart failure.",
    note: {
      title: "",
      desc: [
       "SPIRONOLACTONE (speer on oh LAK tone) treats high blood pressure and heart failure. It may also be used to reduce swelling related to heart, kidney, or liver disease. It helps your kidneys remove more fluid and salt from your blood through the urine without losing too much potassium. It belongs to a group of medications called diuretics",
      ]
    }
  }, 

  {
    name: "Tranylcypromine",
    category: "Mental health",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:99,
    src: "/assets/drugs/Tranylcypromine.jpg",
    desc: "Tranylcypromine is used to treat depression in people who have not been helped by other medications. Tranylcypromine is in a class of medications called monoamine oxidase inhibitors (MAOIs). It works by increasing the amounts of certain natural substances that are needed to maintain mental balance.",
    note: {
      title: "",
      desc: [
       "How should I take tranylcypromine? Follow all directions on your prescription label and read all medication guides or instruction sheets. Your doctor may occasionally change your dose. Use the medicine exactly as directed  Your blood pressure will need to be checked often. You may need to stop using tranylcypromine for a short time before any type of surgery or medical procedure. Tell any doctor who treats you that you take tranylcypromine  It may take a few weeks before you receive the full benefit of taking tranylcypromine. Your doctor will determine how long to treat you with tranylcypromine   Do not stop using tranylcypromine suddenly, or you could have unpleasant withdrawal symptoms. Ask your doctor how to safely stop using this medicine.  Store at room temperature away from moisture and heat.",
      ]
    }
  },
  
  {
    name: "Truxima (rituximab)",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:1800,
    src: "/assets/drugs/Truxima.jpg",
    desc: "Truxima (rituximab) is a medication used for the treatment of follicular lymphoma and diffuse large B-cell Non-Hodgkin’s Lymphoma (NHL); chronic lymphocytic leukemia (CLL); severe active rheumatoid arthritis and granulomatosis with polyangiitis and microscopic polyangiitis.\nNote: Please consult with your treating doctor for personalised dosing.",
    note: {
      title: "",
      desc: [
       "Truxima (rituximab) is a CD20-directed monoclonal antibody indicated for the treatment of patients with follicular lymphoma and diffuse large B-cell Non-Hodgkin’s Lymphoma (NHL); chronic lymphocytic leukemia (CLL); severe active rheumatoid arthritis and granulomatosis with polyangiitis and microscopic polyangiitis. Truxima is the first rituximab biosimilar approved in the United States and the European Union that can be used alone or in combination with other therapies for the treatment of approved indications.",
      ]
    }
  }, 
  
  {
    name: "Tylenol",
    category: "Pain",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:10,
    src: "/assets/drugs/Tylenol.jpg",
    desc: "This drug is used to treat mild to moderate pain (from headaches, menstrual periods, toothaches, backaches, osteoarthritis, or cold/flu aches and pains) and to reduce fever.",
    note: {
      title: "",
      desc: [
       "How to use Tylenol 30 Mg-15 Mg-325 Mg Tablet  Take this product by mouth as directed. Follow all directions on the product package. If you have any questions, ask your doctor or pharmacist.   There are many brands and forms of acetaminophen available. Read the dosing instructions carefully for each product because the amount of acetaminophen may be different between products. Do not take more acetaminophen than recommended. (See also Warning section.    If you are giving acetaminophen to a child, be sure you use a product that is meant for children. Use your child’s weight to find the right dose on the product package. If you don’t know your child’s weight, you can use their age.  For suspensions, shake the medication well before each dose. Some liquids do not need to be shaken before use. Follow all directions on the product package. Measure the liquid medication with the provided dose-measuring spoon/dropper/syringe to make sure you have the correct dose. Do not use a household spoon  For rapidly-dissolving tablets, chew or allow to dissolve on the tongue, then swallow with or without water. For chewable tablets, chew thoroughly before swallowing.   Do not crush or chew extended-release tablets. Doing so can release all of the drug at once, increasing the risk of side effects. Also, do not split the tablets unless they have a score line and your doctor or pharmacist tells you to do so. Swallow the whole or split tablet without crushing or chewing. For effervescent tablets, dissolve the dose in the recommended amount of water, then drink",
      ]
    }
  },
  
  {
    name: "Valsartan",
    category: "High Blood Pressure",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:15,
    src: "/assets/drugs/Valsartan.jpg",
    desc: "VALSARTAN (val SAR tan) treats high blood pressure and heart failure.",
    note: {
      title: "",
      desc: [
       "VALSARTAN (val SAR tan) treats high blood pressure and heart failure. It may also be used to prevent further damage after a heart attack. It works by relaxing the blood vessels, which decreases blood pressure and the amount of work the heart has to do. It belongs to a group of medications called ARBs.",
      ]
    }
  }, 
  
  {
    name: "Vimovo",
    category: "pain",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:2100,
    src: "/assets/drugs/Vimovo.jpg",
    desc: "This medication is used to treat the signs and symptoms of rheumatoid arthritis, osteoarthritis, juvenile idiopathic arthritis, and ankylosing spondylitis when there is a high risk for stomach bleeding/ulcer.",
    note: {
      title: "",
      desc: [
       "VVIMOVO contains two medicines: naproxen, a nonsteroidal anti-inflammatory drug (NSAID) and esomeprazole magnesium, a proton pump inhibitor (PPI). VIMOVO is a prescription medicine used in adults and adolescents, 12 years of age and older who weigh at least 84 pounds (38 kg), who need to take naproxen for relief of symptoms of arthritis and who also need to decrease the risk of developing stomach ulcers caused by naproxen.",
      ]
    }
  },
  
  {
    name: "Vyvanse",
    category: "mental health, uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:201,
    src: "/assets/drugs/Vyvanse.jpg",
    desc: "Generic drug name: Lisdexamfetamine  Lisdexamfetamine is used to treat attention deficit hyperactivity disorder as part of a total treatment plan, including psychological, social, and other treatments. It may help to increase the ability to pay attention, stay focused, and stop fidgeting. Lisdexamfetamine may also be used to treat binge eating disorder.",
    note: {
      title: "",
      desc: [
       "Vyvanse may improve focus for people with inattentive ADHD (aka ADD), and decrease impulsivity and hyperactive behavior — hallmark ADHD symptoms for many patients. It is not known if it is safe for children under the age of 6. Vyvanse has been available since 2007, when the FDA approved the medication for the treatment of ADHD.  Vyvanse is also used to treat binge eating disorder in adults.",
      ]
    }
  },
  
  {
    name: "Xarelto",
    category: "Anticoagulants, Uncategorized",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:376,
    src: "/assets/drugs/Xarelto.jpg",
    desc: "Do not stop taking XARELTO® without talking to the doctor who prescribes it for you. Stopping XARELTO® increases your risk of having a stroke. If you have to stop taking XARELTO®, your doctor may prescribe another blood thinner medicine to prevent a blood clot from forming.",
    note: {
      title: "",
      desc: [
       "XARELTO® is a prescription medicine used to   reduce the risk of stroke and blood clots in adults who have a medical condition called atrial fibrillation that is not caused by a heart valve problem. With atrial fibrillation, part of the heart does not beat the way it should. This can lead to the formation of blood clots, which can travel to the brain, causing a stroke, or to other parts of the body   treat blood clots in the veins of your legs (deep vein thrombosis or DVT) or lungs (pulmonary embolism or PE)   reduce the risk of blood clots from happening again in adults who continue to be at risk for DVT or PE after receiving treatment for blood clots for at least 6 months.",
      ]
    }
  }, 

  {
    name: "Xofigo",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:6500,
    src: "/assets/drugs/Xofigo.jpg",
    desc: "Xofigo is indicated for the treatment of patients with castration-resistant prostate cancer, symptomatic bone metastases and no known visceral metastatic disease.",
    note: {
      title: "",
      desc: [
       "Xofigo is a radiopharmaceutical (a medicine containing a radioactive substance) that is used to treat adults with cancer of the prostate (a gland of the male reproductive system).   Xofigo is used when castration (to stop the production of male hormones) by surgery or with medicines does not work, and when the cancer has spread to the bones (bone metastases) and is causing symptoms such as pain, but has not spread to other internal organs. It should be used only for patients who have had at least two previous treatments for prostate cancer or who cannot receive other treatments.",
      ]
    }
  },
  
  {
    name: "Xofigo",
    category: "Oncologics",
    sold: randomNumber({min: 50, max: 1000, integer: true}),
    discount: randomNumber({min: 5, max: 60, integer: true}),
    amount:6500,
    src: "/assets/drugs/Xofigo.jpg",
    desc: "Xofigo is indicated for the treatment of patients with castration-resistant prostate cancer, symptomatic bone metastases and no known visceral metastatic disease.",
    note: {
      title: "",
      desc: [
       "Xofigo is a radiopharmaceutical (a medicine containing a radioactive substance) that is used to treat adults with cancer of the prostate (a gland of the male reproductive system).   Xofigo is used when castration (to stop the production of male hormones) by surgery or with medicines does not work, and when the cancer has spread to the bones (bone metastases) and is causing symptoms such as pain, but has not spread to other internal organs. It should be used only for patients who have had at least two previous treatments for prostate cancer or who cannot receive other treatments.",
      ]
    }
  }, 
]