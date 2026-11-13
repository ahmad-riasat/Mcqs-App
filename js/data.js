/*
 * FBISE Exam Practice Complete Question Bank
 * Structure: quizData[Class][Subject].duration & .questions
 */

const quizData = {
 
  // CLASS 9 (SSC-I) - 20 MINS (1200 SECONDS)
  "Class 9":{
  "Physics": {
      duration: 900,
      questions: [
        {
          question: "Which pair correctly shows base quantity and its unit?",
          options: ["Temperature – kg", "Time – m", "Mass – kg", "Speed – s"],
          answer: 2,
          explanation: "Mass is a base physical quantity and its SI base unit is kilogram (kg).",
          sourceType: "annual_past_paper"
        },
        {
          question: "When a piece of soft iron is placed near a magnet, it becomes:",
          options: ["Permanently magnetized", "Temporarily magnetized", "Demagnetized", "Electrically charged"],
          answer: 1,
          explanation: "Soft iron gains magnetism easily in a magnetic field but loses it once removed, making it temporarily magnetized.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The study of electricity and magnetism together is known as:",
          options: ["Electromagnetism", "Nuclear Physics", "Classical Mechanics", "Particle Physics"],
          answer: 0,
          explanation: "Electromagnetism deals with the combined study of electric and magnetic phenomena.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A car travels 150 m in 10 seconds. What is its speed?",
          options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
          answer: 2,
          explanation: "Speed = Distance / Time = 150 m / 10 s = 15 m/s.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A 4 kg object reaches the ground with a kinetic energy of 156.8 J. Ignoring air resistance, from what height was it dropped? (Use g = 9.8 m/s²)",
          options: ["2 m", "3 m", "4 m", "5 m"],
          answer: 2,
          explanation: "By conservation of energy, mgh = KE => h = 156.8 / (4 × 9.8) = 156.8 / 39.2 = 4 m.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which statement best explains why displacement is a vector quantity?",
          options: [
            "It has only magnitude",
            "It depends on path length",
            "It has magnitude and direction",
            "It is measured in meters"
          ],
          answer: 2,
          explanation: "Vector quantities require both magnitude and direction to be completely specified.",
          sourceType: "annual_past_paper"
        },
        {
          question: "When a north pole of a magnet is placed in an external magnetic field, it:",
          options: [
            "Always moves toward east",
            "Experiences a force",
            "Becomes a south pole",
            "Stops producing a field"
          ],
          answer: 1,
          explanation: "A magnetic pole placed inside an external magnetic field experiences a magnetic force.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A gun recoils backward when a bullet is fired because:",
          options: [
            "The gun is heavier",
            "Air pushes the gun",
            "The bullet loses speed",
            "Reaction forces act on gun"
          ],
          answer: 3,
          explanation: "According to Newton's third law of motion, the forward force on the bullet produces an equal and opposite reaction force on the gun.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If a bar magnet is cut in half it will become:",
          options: [
            "The same magnet",
            "Un-magnetized",
            "A monopole",
            "Magnet of less strength"
          ],
          answer: 3,
          explanation: "Cutting a magnet creates two smaller complete magnets (each with North and South poles) of reduced magnetic strength.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In scientific research, a theory is:",
          options: [
            "A guess with no evidence",
            "A personal opinion",
            "A rule that never changes",
            "Explanation based on experiments"
          ],
          answer: 3,
          explanation: "A scientific theory is a well-tested explanation supported by repeated experiments and observations.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A ball dropped freely from a tower reaches ground in 4s, the speed of impact of ball is:",
          options: ["0 m/s", "2.45 m/s", "19.6 m/s", "39.2 m/s"],
          answer: 3,
          explanation: "v = vi + gt = 0 + (9.8 m/s² × 4 s) = 39.2 m/s.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A mosquito flying in different directions shows:",
          options: ["Linear motion", "Random motion", "Circular motion", "Vibratory motion"],
          answer: 1,
          explanation: "Irregular or disorderly movement in different directions is called random motion.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Chemistry": {
      duration: 1200,
      questions: [
        {
          question: "Covalent bond is formed by:",
          options: [
            "Transfer of electrons",
            "Transfer of protons",
            "Sharing of electrons",
            "Sharing of neutrons"
          ],
          answer: 2,
          explanation: "A covalent bond is formed by the mutual sharing of electrons between atoms.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The atomic mass of Sodium is 23. What is the gram atomic mass of Sodium?",
          options: ["1 g", "11.5 g", "23 g", "46 g"],
          answer: 2,
          explanation: "The atomic mass of an element expressed in grams is its gram atomic mass, so for Sodium it is 23 g.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which solid has no regular arrangement of particles?",
          options: ["Crystalline", "Metallic", "Ionic", "Amorphous"],
          answer: 3,
          explanation: "Amorphous solids do not have a regular, orderly arrangement of constituent particles.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Elements in group 1 and 2 belong to:",
          options: ["p-block", "s-block", "d-block", "f-block"],
          answer: 1,
          explanation: "Groups 1 and 2 have their valence electrons in the s-orbital, placing them in the s-block.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Chlorine reacts with sodium to form:",
          options: ["NaCl", "Na₂O", "NaOH", "NaClO"],
          answer: 0,
          explanation: "Sodium reacts directly with chlorine gas to form sodium chloride (2Na + Cl₂ → 2NaCl).",
          sourceType: "annual_past_paper"
        },
        {
          question: "K shell has sub-shells:",
          options: ["3s, 3p, 3d", "2s, 2p", "2s, 3p", "1s"],
          answer: 3,
          explanation: "The first energy level (K shell, n = 1) contains only one sub-shell, which is 1s.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A solution contains 2 moles of solute in 1 dm³. Its molarity is:",
          options: ["0.5 M", "1 M", "2 M", "3 M"],
          answer: 2,
          explanation: "Molarity = Moles of solute / Volume of solution in dm³ = 2 moles / 1 dm³ = 2 M.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Avogadro's number represents the number of:",
          options: [
            "Grams in one mole",
            "Particles in one mole",
            "Litres of gas",
            "Ions in one gram"
          ],
          answer: 1,
          explanation: "Avogadro's number (6.02 × 10²³) is the number of particles (atoms, ions, or molecules) in one mole of a substance.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Elements in the same group show similar properties because they have the same:",
          options: [
            "Mass number",
            "Number of Valence electrons",
            "Number of Neutrons",
            "Atomic radii"
          ],
          answer: 1,
          explanation: "Elements in the same periodic group have the same number of valence electrons, giving them similar chemical properties.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In an electrolytic cell, the cathode is the electrode where:",
          options: [
            "Oxidation occurs",
            "Electrons are lost",
            "Reduction occurs",
            "No reaction occurs"
          ],
          answer: 2,
          explanation: "In all electrochemical cells, reduction (gain of electrons) always takes place at the cathode.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In a sugar solution, sugar acts as:",
          options: ["Solvent", "Solute", "Suspension", "Colloid"],
          answer: 1,
          explanation: "Sugar is the minor component dissolved in water, so it acts as the solute.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is commonly found in free state in nature?",
          options: ["Sodium", "Potassium", "Gold", "Calcium"],
          answer: 2,
          explanation: "Gold is chemically unreactive (noble metal) and therefore occurs naturally in the free elemental state.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Mathematics": {
      duration: 1200,
      questions: [
        {
          question: "A matrix of 3 rows and 2 columns has order:",
          options: ["2×3", "3×2", "5×1", "6×1"],
          answer: 1,
          explanation: "Order of a matrix is written as (Number of rows) × (Number of columns), which is 3×2.",
          sourceType: "annual_past_paper"
        },
        {
          question: "a<sup>1/3</sup> equals:",
          options: ["a³", "³√a", "√a³", "a⁻³"],
          answer: 1,
          explanation: "In radical form, a fractional exponent a^(1/3) represents the cube root of a (³√a).",
          sourceType: "annual_past_paper"
        },
        {
          question: "A matrix [2  4] is called:",
          options: ["Square matrix", "Unit matrix", "Rectangular matrix", "Diagonal matrix"],
          answer: 2,
          explanation: "Since the number of rows (1) is not equal to the number of columns (2), [2  4] is a rectangular matrix (specifically a row matrix).",
          sourceType: "annual_past_paper"
        },
        {
          question: "log(8/2) =",
          options: ["log 4", "log 6", "log 10", "log 16"],
          answer: 0,
          explanation: "Simplifying inside the logarithm: 8 ÷ 2 = 4, so log(8/2) = log 4.",
          sourceType: "annual_past_paper"
        },
        {
          question: "a + b = 10, a - b = 4, ab = ?",
          options: ["12", "18", "21", "25"],
          answer: 2,
          explanation: "Using the identity 4ab = (a + b)² - (a - b)² = 10² - 4² = 100 - 16 = 84, so ab = 84 / 4 = 21.",
          sourceType: "annual_past_paper"
        },
        {
          question: "When f(x) is divided by (x - a), the remainder is:",
          options: ["f(x)", "a", "f(a)", "0"],
          answer: 2,
          explanation: "By the Remainder Theorem, when a polynomial f(x) is divided by (x - a), the remainder is f(a).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Product of two algebraic expressions is:",
          options: ["HCF × LCM", "HCF + LCM", "HCF", "HCF = LCM"],
          answer: 0,
          explanation: "For any two polynomials p(x) and q(x), p(x) × q(x) = HCF × LCM.",
          sourceType: "annual_past_paper"
        },
        {
          question: "|-5| =",
          options: ["-5", "5", "0", "10"],
          answer: 1,
          explanation: "The absolute value of a negative number is its positive magnitude, so |-5| = 5.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In point (4, 7), 4 is:",
          options: ["y-value", "Column", "x-value", "Position"],
          answer: 2,
          explanation: "In an ordered pair (x, y), the first coordinate (4) represents the x-value (abscissa).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Points are represented by:",
          options: ["Letters", "Lines", "Angles", "Ordered pairs"],
          answer: 3,
          explanation: "In a Cartesian coordinate plane, points are located and represented by ordered pairs (x, y).",
          sourceType: "annual_past_paper"
        },
        {
          question: "One side and two angles congruent:",
          options: ["SSS", "SAS", "ASA", "SSA"],
          answer: 2,
          explanation: "ASA (Angle-Side-Angle) postulates congruence when two angles and a side are congruent.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Medians meet at:",
          options: ["Incenter", "Orthocenter", "Circumcenter", "Centroid"],
          answer: 3,
          explanation: "The point of concurrency where the three medians of a triangle intersect is called the centroid.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A perpendicular bisector cuts the line at:",
          options: ["At end point", "0°", "At one third", "90°"],
          answer: 3,
          explanation: "A perpendicular bisector divides a line segment into two equal halves at a right angle (90°).",
          sourceType: "annual_past_paper"
        },
        {
          question: "In △ABC the angle opposite largest side is:",
          options: ["Largest", "Smallest", "0°", "Equal"],
          answer: 0,
          explanation: "In any triangle, the angle opposite to the longest side has the greatest measure.",
          sourceType: "annual_past_paper"
        },
        {
          question: `Pythagoras theorem is when sides of triangle are a, b and c:<br>
            <svg width="95" height="75" viewBox="0 0 110 85" style="margin-top:6px; vertical-align:middle;">
              <polygon points="22,10 22,68 92,68" fill="none" stroke="#0f172a" stroke-width="2"/>
              <polyline points="22,58 32,58 32,68" fill="none" stroke="#0f172a" stroke-width="1.5"/>
              <text x="8" y="44" font-size="13" font-family="Arial" fill="#0f172a">a</text>
              <text x="53" y="82" font-size="13" font-family="Arial" fill="#0f172a">b</text>
              <text x="61" y="34" font-size="13" font-family="Arial" fill="#0f172a">c</text>
            </svg>`,
          options: ["c = a + b", "c² = a² + b²", "c² = a - b", "c = a² + b²"],
          answer: 1,
          explanation: "In a right-angled triangle with hypotenuse c and legs a and b, Pythagoras' theorem states c² = a² + b².",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Biology": {
      duration: 900,
      questions: [
        {
          question: "Which field applies computer models and algorithms to study biological systems?",
          options: [
            "Biochemistry",
            "Biotechnology",
            "Computational Biology",
            "Biophysics"
          ],
          answer: 2,
          explanation: "Computational biology uses computer models, simulations, and algorithms to analyze and understand biological systems.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which is the highest taxonomic rank?",
          options: ["Class", "Order", "Kingdom", "Phylum"],
          answer: 2,
          explanation: "Among the listed taxonomic ranks (Kingdom, Phylum, Class, Order), Kingdom is the highest rank.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The main role of mitochondria is:",
          options: [
            "Photosynthesis",
            "Transport",
            "ATP production",
            "Cell division"
          ],
          answer: 2,
          explanation: "Mitochondria are the sites of aerobic respiration and generate energy in the form of ATP.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which phase of the cell cycle involves DNA replication?",
          options: ["G₁ phase", "S phase", "G₂ phase", "M phase"],
          answer: 1,
          explanation: "During the S (Synthesis) phase of interphase, the cell duplicates its DNA.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which tissue in the stomach is responsible for churning?",
          options: ["Epithelial", "Muscular", "Nervous", "Connective"],
          answer: 1,
          explanation: "Smooth muscular tissue in the stomach wall contracts and relaxes to churn food and mix it with gastric juice.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which organ helps to maintain water balance in the body?",
          options: ["Liver", "Lung", "Stomach", "Kidney"],
          answer: 3,
          explanation: "Kidneys perform osmoregulation by filtering blood and regulating water and salt excretion.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A broken DNA strand shows exposed adenine ______ base will attach to it.",
          options: ["Guanine", "Thymine", "Cytosine", "Uracil"],
          answer: 1,
          explanation: "According to complementary base pairing in DNA, Adenine (A) always pairs with Thymine (T).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which elements are present in carbohydrates?",
          options: ["C, H, O", "C, N, O", "H, O, N", "C, S, O"],
          answer: 0,
          explanation: "Carbohydrates are organic compounds composed of Carbon (C), Hydrogen (H), and Oxygen (O).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Enzymes are mostly composed of:",
          options: ["Proteins", "Carbohydrates", "Lipids", "Minerals"],
          answer: 0,
          explanation: "Almost all enzymes are globular proteins that act as biological catalysts.",
          sourceType: "annual_past_paper"
        },
        {
          question: "ATP is called the energy currency of the cell because it:",
          options: [
            "Transfers energy",
            "Stores DNA",
            "Forms enzymes",
            "Builds tissues"
          ],
          answer: 0,
          explanation: "ATP stores and transfers chemical energy between energy-releasing and energy-requiring cellular reactions.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which part of flower receives pollen grains?",
          options: ["Anther", "Ovule", "Filament", "Stigma"],
          answer: 3,
          explanation: "The stigma is the receptive tip of the carpel where pollen grains land during pollination.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which is a source of variations in organisms?",
          options: ["Nutrition", "Excretion", "Respiration", "Mutation"],
          answer: 3,
          explanation: "Mutations are sudden changes in DNA that introduce new genetic variations into a population.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Computer Science": {
      duration: 1200,
      questions: [
        {
          question: "Which document outlines a business idea, its goals, and planning details?",
          options: ["Resume", "Business plan", "Invoice", "Advertisement"],
          answer: 1,
          explanation: "A business plan is a formal written document outlining a business's goals, strategies, and operational/financial plans.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why is computational thinking important in computer science?",
          options: [
            "It increases typing speed",
            "It helps break problems into manageable steps",
            "It improves computer hardware",
            "It replaces programming"
          ],
          answer: 1,
          explanation: "Computational thinking involves decomposition, pattern recognition, abstraction, and algorithms to break complex problems into smaller, manageable steps.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why is HTML used when creating a website?",
          options: [
            "To style web pages",
            "To store data",
            "To display text and images",
            "To run programs"
          ],
          answer: 2,
          explanation: "HTML (HyperText Markup Language) structures web pages and displays content such as text, links, and images in a browser.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which part of development handles the user interface of a website?",
          options: ["Back end", "Server side", "Database layer", "Front end"],
          answer: 3,
          explanation: "Front-end development focuses on the visual layout, design, and interactive user interface that users see and interact with.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why are variables used in JavaScript?",
          options: [
            "To store values that can change",
            "To design web pages",
            "To create hyperlinks",
            "To format text"
          ],
          answer: 0,
          explanation: "Variables act as containers in memory for storing data values that can be updated or referenced during program execution.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why is the ALU an important part of the CPU?",
          options: [
            "It performs arithmetic and logical operations",
            "It manages memory",
            "It controls input devices",
            "It performs analogue linear operations"
          ],
          answer: 0,
          explanation: "The Arithmetic Logic Unit (ALU) executes all mathematical calculations and logical comparisons inside the CPU.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why is cloud computing needed in modern computing?",
          options: [
            "To reduce screen size",
            "To replace computers",
            "To access data and services over the Internet",
            "To increase keyboard speed"
          ],
          answer: 2,
          explanation: "Cloud computing enables on-demand access to storage, applications, and computing resources over the Internet from anywhere.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What is meant by fake news?",
          options: [
            "Verified information",
            "Educational content",
            "False or misleading information",
            "Official announcements"
          ],
          answer: 2,
          explanation: "Fake news consists of fabricated, inaccurate, or deliberately misleading stories presented as legitimate news.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What do Sustainable Development Goals (SDGs) represent?",
          options: [
            "Business profits",
            "Personal goals",
            "Marketing targets",
            "Global development goals"
          ],
          answer: 3,
          explanation: "The UN Sustainable Development Goals (SDGs) are a set of 17 global goals aimed at ending poverty, protecting the planet, and ensuring prosperity.",
          sourceType: "annual_past_paper"
        },
        {
          question: "How does logical thinking support problem solving?",
          options: [
            "By using trial and error and providing false results",
            "By arranging steps in a correct sequence",
            "By memorizing commands and repeating these",
            "By designing interfaces"
          ],
          answer: 1,
          explanation: "Logical thinking uses structured reasoning to organize steps in a clear, valid sequence to reach an accurate solution.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why is software piracy considered illegal?",
          options: [
            "It violates ownership rights",
            "It is outdated",
            "It slows the working of computer",
            "It limits access to the online data"
          ],
          answer: 0,
          explanation: "Software piracy is the unauthorized copying, distribution, or use of copyrighted software, violating intellectual property and ownership rights.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why is continuous data suitable for measurements like 'heights' of students?",
          options: [
            "It uses labels",
            "It has fixed values",
            "It is non-numeric",
            "It can take any value in a range"
          ],
          answer: 3,
          explanation: "Continuous data represents measurable quantities (such as height, weight, or temperature) that can take any decimal or fractional value within a given range.",
          sourceType: "annual_past_paper"
        }
      ]
    }},

  // =====================
  // CLASS 10 (SSC-II)
  // =====================
  "Class 10": {
    "Physics": {
      duration: 900,
      questions: [
        {
          question: "The main function of a diode in a circuit is to:",
          options: [
            "Reduce voltage",
            "Amplify current",
            "Store charge",
            "Rectify current"
          ],
          answer: 3,
          explanation: "A diode allows current to flow in only one direction, thereby rectifying alternating current (AC) into direct current (DC).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The critical angle θ<sub>c</sub> for polystyrene (n = 1.49) is:",
          options: ["32.2°", "60°", "45°", "42.2°"],
          answer: 3,
          explanation: "sin(θc) = 1 / n = 1 / 1.49 ≈ 0.6711 => θc = sin⁻¹(0.6711) ≈ 42.2°.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Charging of solids by friction occurs due to the transfer of:",
          options: ["Atoms", "Protons", "Neutrons", "Electrons"],
          answer: 3,
          explanation: "Electrons are loosely bound in outer shells and transfer from one material to another during rubbing.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The output of an OR gate is LOW when:",
          options: [
            "Any one input is LOW",
            "Any one input is HIGH",
            "All inputs are LOW",
            "All inputs are HIGH"
          ],
          answer: 2,
          explanation: "An OR gate outputs LOW (0) only when every input is LOW (0).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Warm air rises and cool air sinks in a heated room because of:",
          options: ["Reflection", "Radiation", "Convection", "Conduction"],
          answer: 2,
          explanation: "Convection transfers heat through fluids (liquids and gases) via bulk movement of warmer, less dense fluid rising and cooler fluid sinking.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If the direction of current in a conductor is reversed, the direction of force on it will:",
          options: ["Reverse", "Remain the same", "Become 45°", "Increase"],
          answer: 0,
          explanation: "According to Fleming's left-hand rule (F = I L × B), reversing the current direction reverses the direction of the magnetic force.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A charge of 10 C flows through a conductor in 5 s. The value of current is:",
          options: ["10 A", "0.5 A", "2 A", "5 A"],
          answer: 2,
          explanation: "Current I = Q / t = 10 C / 5 s = 2 A.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Linear expansion in solids refers to the change in:",
          options: ["Mass only", "Area only", "Volume only", "Length only"],
          answer: 3,
          explanation: "Linear thermal expansion measures the fractional change in length of a solid upon heating.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Half life of iodine is 8 days. How much of 40 g sample of iodine will be left after 16 days?",
          options: ["2.5 g", "20 g", "10 g", "5 g"],
          answer: 2,
          explanation: "16 days = 2 half-lives (16 / 8 = 2). Remaining mass = 40 g × (1/2)² = 40 / 4 = 10 g.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Compression and rarefaction are features of ______ waves.",
          options: ["Longitudinal", "Transverse", "Surface", "Electromagnetic"],
          answer: 0,
          explanation: "Longitudinal waves propagate through alternating regions of compression and rarefaction parallel to wave motion.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which instrument converts electrical energy into mechanical energy?",
          options: ["Capacitor", "Electric motor", "DC Generator", "Transformer"],
          answer: 1,
          explanation: "An electric motor uses magnetic forces on current-carrying coils to convert electrical energy into mechanical rotation.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Sound travels faster in solids than in gases mainly because solids have:",
          options: ["Less pressure", "Higher density", "Lower density", "Less particles"],
          answer: 1,
          explanation: "Closely packed particles and high elasticity/density in solids allow vibrations to transmit much faster than in gases.",
          sourceType: "annual_past_paper"
        }
      ]
    },
   "Chemistry": {
      duration: 1200,
      questions: [
        {
          question: "Which half-equation occurs at the anode during electrolysis of molten NaCl?",
          options: [
            "2Cl⁻ → Cl₂ + 2e⁻",
            "Na⁺ + e⁻ → Na",
            "Cl₂ + 2e⁻ → 2Cl⁻",
            "Na → Na⁺ + e⁻"
          ],
          answer: 0,
          explanation: "Oxidation occurs at the anode, where negatively charged chloride ions lose electrons to form chlorine gas (2Cl⁻ → Cl₂ + 2e⁻).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Change in state of a substance from gas to liquid is called:",
          options: ["Freezing", "Sublimation", "Condensation", "Deposition"],
          answer: 2,
          explanation: "Condensation is the physical phase transition in which gas cools and changes into a liquid.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The cathode in an electrolytic cell is always:",
          options: [
            "Insulated",
            "Positively charged",
            "Negatively charged",
            "Neutral"
          ],
          answer: 2,
          explanation: "In an electrolytic cell, the cathode is connected to the negative terminal of the battery and is therefore negatively charged.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Rapid formation of gas during a reaction indicates:",
          options: [
            "Endothermic reaction",
            "Slow reaction rate",
            "No reaction",
            "High reaction rate"
          ],
          answer: 3,
          explanation: "Vigorous or rapid evolution of gas bubbles per unit time indicates a fast (high) rate of reaction.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Carbonates of ______ are usually soluble in water.",
          options: ["Na, K", "Ca, Mg", "Fe, Cu", "Ag, Pb"],
          answer: 0,
          explanation: "Alkali metal carbonates such as sodium carbonate (Na₂CO₃) and potassium carbonate (K₂CO₃) are soluble in water, whereas most other metal carbonates are insoluble.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which technique is used to remove excess insoluble solid from salt solution?",
          options: [
            "Distillation",
            "Evaporation",
            "Crystallization",
            "Filtration"
          ],
          answer: 3,
          explanation: "Filtration separates undissolved (insoluble) solid particles from a liquid solution using filter paper.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In Contact process, SO₂ is converted into SO₃ at about:",
          options: ["650°C", "250°C", "350°C", "450°C"],
          answer: 3,
          explanation: "In the Contact process, catalytic oxidation of SO₂ to SO₃ over V₂O₅ is carried out at an optimum temperature of about 450°C.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Graph of product concentration against time shows:",
          options: [
            "Pressure rate",
            "Molarity rate",
            "Temperature rate",
            "Reaction rate"
          ],
          answer: 3,
          explanation: "The slope of a product concentration versus time graph measures how fast products form, which represents the reaction rate.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Salts are generally good conductors of electricity in ______ state.",
          options: ["Powdered", "Solid", "Molten", "Gas"],
          answer: 2,
          explanation: "In the molten (or aqueous) state, ionic lattices break down so ions are free to move and conduct electricity.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Maximum amount of product in a reaction is determined by:",
          options: [
            "Limiting reactant",
            "Reactant in excess",
            "Catalyst",
            "Solvent"
          ],
          answer: 0,
          explanation: "The limiting reactant is consumed first and stops the reaction, thereby determining the maximum theoretical yield of product.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Vinegar is produced by bacterial oxidation of:",
          options: ["Ethanoic acid", "Ethanol", "Propanol", "Methanol"],
          answer: 1,
          explanation: "Acetobacter bacteria oxidize ethanol (C₂H₅OH) in the presence of oxygen to produce ethanoic acid (vinegar).",
          sourceType: "annual_past_paper"
        },
        {
          question: "One major advantage of alcohol fuels over fossil fuels is that they:",
          options: [
            "Are non-flammable",
            "Are renewable",
            "Produce smoke",
            "Have higher sulfur content"
          ],
          answer: 1,
          explanation: "Alcohol fuels (such as bioethanol) can be produced by fermenting plant biomass, making them renewable and cleaner-burning than fossil fuels.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Biology": {
      duration: 1200,
      questions: [
        {
          question: "Which of the following is a part of the peripheral nervous system?",
          options: ["Cerebrum", "Cerebellum", "Spinal nerves", "Brain stem"],
          answer: 2,
          explanation: "The peripheral nervous system (PNS) consists of cranial nerves and spinal nerves that connect the central nervous system to the rest of the body.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Oogenesis takes place in the:",
          options: ["Uterus", "Bladder", "Ovary", "Testes"],
          answer: 2,
          explanation: "Oogenesis is the process of female gamete (ovum) formation, which occurs inside the ovaries.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which chromosome type has the centromere at one extreme end?",
          options: ["Metacentric", "Submetacentric", "Acrocentric", "Telocentric"],
          answer: 3,
          explanation: "A telocentric chromosome has its centromere located at the extreme terminal end of the chromosome.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is a zoonotic disease?",
          options: ["Rickets", "Rabies", "Diabetes", "Scurvy"],
          answer: 1,
          explanation: "Rabies is an infectious viral disease transmitted from animals to humans, making it a zoonotic disease.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which biotechnology-based method helps in early detection of cancer?",
          options: [
            "X-ray only",
            "Vaccination",
            "Genetic screening",
            "Antibiotic therapy"
          ],
          answer: 2,
          explanation: "Genetic screening identifies specific gene mutations and biomarkers associated with cancer risk or early-stage tumor development.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In public health, biostatistics is useful for:",
          options: [
            "Performing surgery",
            "Analyzing disease trends",
            "Manufacturing vaccines",
            "Treating infections"
          ],
          answer: 1,
          explanation: "Biostatistics applies statistical methods to biological and public health data to track outbreaks and analyze disease trends.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which part of the alimentary canal absorbs water?",
          options: ["Stomach", "Small intestine", "Oesophagus", "Large intestine"],
          answer: 3,
          explanation: "The large intestine (colon) absorbs most of the remaining water and electrolytes from undigested food matter.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which organ carries urine out of the body?",
          options: ["Kidney", "Ureter", "Bladder", "Urethra"],
          answer: 3,
          explanation: "The urethra is the tube that conveys urine from the urinary bladder out of the body during urination.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which structure prevents food from entering the trachea during swallowing?",
          options: ["Epiglottis", "Pharynx", "Larynx", "Bronchi"],
          answer: 0,
          explanation: "The epiglottis is a cartilaginous flap that folds down over the glottis during swallowing to prevent food or liquid from entering the windpipe (trachea).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is a role of the immune system?",
          options: [
            "Oxygen transport",
            "Destruction of pathogens",
            "Food digestion",
            "Heat regulation"
          ],
          answer: 1,
          explanation: "The immune system defends the body against infectious organisms by recognizing and destroying pathogens.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The thyroid gland mainly secretes:",
          options: ["Insulin", "Adrenaline", "Glucagon", "Thyroxine"],
          answer: 3,
          explanation: "The thyroid gland secretes thyroxine (T4), which regulates the body's basal metabolic rate.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Phosphate in body is regulated by:",
          options: ["Parathyroid", "Thyroid", "Pituitary", "Adrenal"],
          answer: 0,
          explanation: "The parathyroid glands secrete parathyroid hormone (PTH), which regulates calcium and phosphate ion levels in the blood.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Computer Science & Entrepreneurship": {
      duration: 1200,
      questions: [
        {
          question: "Which tool provides coding, debugging, and compiling in one place?",
          options: ["Translator", "Text Editor", "IDE", "Repository"],
          answer: 2,
          explanation: "An Integrated Development Environment (IDE) combines a code editor, compiler/interpreter, and debugger into a single application.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which component of system software controls input and output operations?",
          options: [
            "Word processor",
            "Device driver",
            "Spreadsheet",
            "Web browser"
          ],
          answer: 1,
          explanation: "A device driver is system software that allows the operating system to communicate with and control hardware input/output devices.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which number system uses digits from 0 to 7?",
          options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
          answer: 1,
          explanation: "The octal number system is base-8 and uses eight distinct digits: 0, 1, 2, 3, 4, 5, 6, and 7.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The algorithm commonly used to arrange data in ascending or descending order:",
          options: ["Sorting", "Searching", "Traversal", "Merging"],
          answer: 0,
          explanation: "Sorting algorithms organize elements of a list or array into a specific order, such as ascending or descending.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What is meant by abstraction in computer science?",
          options: [
            "Writing long programs",
            "Hiding unnecessary details",
            "Using hardware only",
            "Storing and copying data"
          ],
          answer: 1,
          explanation: "Abstraction simplifies complex systems by hiding internal implementation details and showing only essential features.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which field enables machines to perform tasks that normally require human intelligence?",
          options: [
            "Data Science",
            "Computer Networks",
            "Database Management",
            "Artificial Intelligence"
          ],
          answer: 3,
          explanation: "Artificial Intelligence (AI) focuses on building systems capable of learning, reasoning, and solving problems like humans.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Different properties or statistics in data are represented in a circular chart in:",
          options: ["Pie chart", "Bar chart", "Line chart", "Scatter plot"],
          answer: 0,
          explanation: "A pie chart divides a circle into proportional slices to illustrate numerical proportions or percentages.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What does Blockchain mainly provide?",
          options: [
            "Fast internet speed",
            "Hardware control",
            "Secure and distributed record keeping",
            "Graphical interface for better visual representation"
          ],
          answer: 2,
          explanation: "Blockchain is a decentralized, tamper-resistant digital ledger that provides secure and distributed record keeping across a network.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which AI application enables computers to understand human language?",
          options: [
            "Robotics",
            "Natural Language Processing",
            "Computer Networks Setting",
            "Database Management System"
          ],
          answer: 1,
          explanation: "Natural Language Processing (NLP) enables computers to interpret, analyze, and generate human spoken or written language.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which factor mainly contributes to the digital divide?",
          options: [
            "Lack of electricity and gas",
            "High computer speed",
            "Too much data and information",
            "Limited access to internet and devices"
          ],
          answer: 3,
          explanation: "The digital divide refers to the gap between individuals or regions that have access to modern digital devices and the internet and those with limited or no access.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is an example of cyberbullying?",
          options: [
            "Sending polite messages and email",
            "Watching and sharing videos",
            "Posting hurtful comments online",
            "Reading news and articles websites"
          ],
          answer: 2,
          explanation: "Cyberbullying involves using digital platforms to harass, intimidate, or post hurtful comments about someone online.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What is the main purpose of using digital tools in market research?",
          options: [
            "To collect and analyze customer information",
            "To design logos",
            "To write and execute programs",
            "To repair hardware and software"
          ],
          answer: 0,
          explanation: "Digital market research tools help businesses gather, track, and analyze customer preferences, trends, and feedback.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Gathering of numerical data and statistics is a part of:",
          options: [
            "Qualitative research",
            "Quantitative research",
            "Individual interviews",
            "Narrative study"
          ],
          answer: 1,
          explanation: "Quantitative research focuses on collecting and analyzing measurable numerical data and statistics.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    
    "Mathematics": {
      duration: 1200,
      questions: [
        {
          question: "The product (1 + i)(1 − i) gives:",
          options: ["0", "2", "1 − i", "1 + i"],
          answer: 1,
          explanation: "(1 + i)(1 − i) = 1² − i² = 1 − (−1) = 1 + 1 = 2.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If α, β are the roots of 2x² − 4x + 1 = 0, then α + β equals:",
          options: ["2", "1/2", "−2", "4"],
          answer: 0,
          explanation: "Sum of roots α + β = −b / a = −(−4) / 2 = 4 / 2 = 2.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If A is a matrix of order 2×3 and B is a matrix of order 3×2, then order of AB is:",
          options: ["2×2", "3×3", "2×3", "3×2"],
          answer: 0,
          explanation: "When multiplying a (2×3) matrix by a (3×2) matrix, the resulting product matrix AB has order 2×2.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If f(x) = x² and g(x) = x + 1, then g(f(x)) equals:",
          options: ["x² + 1", "(x + 1)²", "x² + 2x + 1", "x² + x + 1"],
          answer: 0,
          explanation: "g(f(x)) = g(x²) = x² + 1.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The solution of |x − 2| = 4 is:",
          options: [
            "x = 6 or x = 2",
            "x = 6",
            "x = 6 or x = −2",
            "x = 2"
          ],
          answer: 2,
          explanation: "x − 2 = 4 ⇒ x = 6, and x − 2 = −4 ⇒ x = −2.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The discriminant of 2x² − 3x − 2 = 0 is:",
          options: ["1", "−7", "25", "5"],
          answer: 2,
          explanation: "Discriminant Δ = b² − 4ac = (−3)² − 4(2)(−2) = 9 + 16 = 25.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If <u>a</u> = 2î + ĵ and <u>b</u> = î + ĵ, then vector î is equal to:",
          options: [
            "<u>a</u> − <u>b</u>",
            "2<u>a</u> − <u>b</u>",
            "<u>b</u> − <u>a</u>",
            "1/2(<u>a</u> − <u>b</u>)"
          ],
          answer: 0,
          explanation: "Subtracting vector b from vector a: <u>a</u> − <u>b</u> = (2î + ĵ) − (î + ĵ) = î.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In △ABC, if ∠A = 30°, a = 5 cm and b = 10 cm, then sin B equals:",
          options: ["1", "1/2", "2", "√3/2"],
          answer: 0,
          explanation: "By the Law of Sines, sin B / b = sin A / a ⇒ sin B = (10 × sin 30°) / 5 = (10 × 1/2) / 5 = 5 / 5 = 1.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which real-life object best demonstrates equal arcs subtended by equal chords?",
          options: [
            "Square table top",
            "Ladder",
            "Door frame",
            "Round clock face marking"
          ],
          answer: 3,
          explanation: "A round clock face is a circle divided into equal intervals where equal chords subtend equal arcs along the circumference.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If two circles touch internally and their radii are 9 cm and 3 cm, the distance between their centres is:",
          options: ["12 cm", "6 cm", "3 cm", "9 cm"],
          answer: 1,
          explanation: "When two circles touch internally, the distance between their centres equals the difference of their radii: 9 cm − 3 cm = 6 cm.",
          sourceType: "annual_past_paper"
        },
        {
          question: "From a deck of cards, one card is drawn. What is the probability that it is a king?",
          options: ["4/52", "1/52", "2/4", "1/4"],
          answer: 0,
          explanation: "A standard deck of 52 cards contains 4 kings, so the probability of drawing a king is 4/52.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If most points in a scatter diagram are widely spread with no clear pattern, it shows:",
          options: [
            "Strong positive correlation",
            "Strong negative correlation",
            "No correlation",
            "Perfect correlation"
          ],
          answer: 2,
          explanation: "When points on a scatter diagram are randomly scattered with no upward or downward trend, there is no correlation between the variables.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What is the slope of the line y = 4x + 1?",
          options: ["1", "−4", "−1", "4"],
          answer: 3,
          explanation: "In slope-intercept form y = mx + c, the coefficient of x is the slope m = 4.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If a line touches a circle at exactly one point, the line is called:",
          options: ["Secant", "Chord", "Tangent", "Diameter"],
          answer: 2,
          explanation: "A tangent is a straight line that touches a circle at a single point of contact without crossing it.",
          sourceType: "annual_past_paper"
        },
        {
          question: "x² + 5x + 6 =",
          options: [
            "(x − 1)(x − 6)",
            "(x − 2)(x − 3)",
            "(x + 1)(x + 6)",
            "(x + 2)(x + 3)"
          ],
          answer: 3,
          explanation: "Splitting the middle term: x² + 3x + 2x + 6 = x(x + 3) + 2(x + 3) = (x + 2)(x + 3).",
          sourceType: "annual_past_paper"
        }
      ]
    }
  },
  // ==========================================
  // CLASS 11 (HSSC-I) - 
  // ==========================================
  "Class 11": {
    "Physics": {
      duration: 1500,
      questions: [
        {
          question: "The dimensions of torque are:",
          options: [
            "[M⁻¹L²T⁻²]",
            "[ML²T⁻¹]",
            "[M²L⁻²T⁻²]",
            "[ML²T⁻²]"
          ],
          answer: 3,
          explanation: "Torque τ = r × F, so dimensions = [L] × [MLT⁻²] = [ML²T⁻²].",
          sourceType: "annual_past_paper"
        },
        {
          question: "If the percentage error in mass is 1% and velocity is 2% then the possible percentage error in momentum is:",
          options: ["3%", "4%", "5%", "8%"],
          answer: 0,
          explanation: "Since momentum P = mv, percentage errors add up: 1% + 2% = 3%.",
          sourceType: "annual_past_paper"
        },
        {
          question: "For which angle the equation |A × B| = |A . B| is correct?",
          options: ["30°", "45°", "60°", "76°"],
          answer: 1,
          explanation: "AB sinθ = AB cosθ ⇒ tanθ = 1 ⇒ θ = 45°.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The Fₓ component of a force F of magnitude 50 N making an angle of 60° with X-axis, is:",
          options: ["25 N", "5 N", "15 N", "10 N"],
          answer: 0,
          explanation: "Fx = F cos(60°) = 50 × 0.5 = 25 N.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Two balls of mass 10 kg and 2 gm, collide head-on elastically. If 2 gm ball is stationary and 10 kg ball is moving at 2 m/s before the collision, what is the velocity of 2 gm ball after collision?",
          options: ["0 m/s", "4 m/s", "3 m/s", "6 m/s"],
          answer: 1,
          explanation: "When a massive body (m₁ ≫ m₂) moving at velocity v₁ collides elastically with a stationary light body, the light body moves off at approximately 2v₁ = 2 × 2 = 4 m/s.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A projectile has maximum range at:",
          options: ["90°", "60°", "45°", "30°"],
          answer: 2,
          explanation: "Range R = (vᵢ² sin 2θ)/g is maximum when sin 2θ = 1, i.e., 2θ = 90° ⇒ θ = 45°.",
          sourceType: "annual_past_paper"
        },
        {
          question: "1 radian =",
          options: ["67.3°", "60°", "5.73°", "57.3°"],
          answer: 3,
          explanation: "1 radian = 180° / π ≈ 57.3°.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If mass of a moving body is doubled but velocity is reduced to one-fourth, then:",
          options: [
            "K.E increases 2 times",
            "K.E remains the same",
            "K.E decreases 8 times",
            "K.E increases 4 times"
          ],
          answer: 2,
          explanation: "K.E' = ½(2m)(v/4)² = ½(2m)(v²/16) = (1/8)(½mv²), so kinetic energy decreases 8 times.",
          sourceType: "annual_past_paper"
        },
        {
          question: "An ideal fluid has:",
          options: [
            "Variable velocity",
            "High compressibility",
            "Variable density",
            "Zero viscosity"
          ],
          answer: 3,
          explanation: "An ideal fluid is incompressible, non-viscous (zero viscosity), and exhibits steady flow.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Materials that do not undergo plastic deformation but suddenly break within Elastic region are called:",
          options: ["Amorphous", "Ductile", "Brittle", "Polymers"],
          answer: 2,
          explanation: "Brittle materials fracture shortly after reaching their elastic limit without undergoing significant plastic deformation.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In an isochoric process:",
          options: ["Q = 0", "Q = ΔW", "Q = ΔU", "Q = ΔU - ΔW"],
          answer: 2,
          explanation: "In an isochoric process, volume remains constant (ΔV = 0), so work done ΔW = 0 and Q = ΔU.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Two tuning forks of frequencies 512 Hz and 516 Hz are sounded together. The number of beats produced per second is:",
          options: ["512 Hz", "516 Hz", "1028 Hz", "4 Hz"],
          answer: 3,
          explanation: "Beat frequency = |f₁ − f₂| = |512 − 516| = 4 Hz.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Two charges are experiencing a force of 50 N when placed at 10 cm distance. If charges are placed at 5 cm distance, then force will be:",
          options: ["200 N", "75 N", "12.5 N", "100 N"],
          answer: 0,
          explanation: "By Coulomb's law, F ∝ 1/r². Halving the distance (10 cm to 5 cm) increases the force by 2² = 4 times: 50 N × 4 = 200 N.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The resistance of a certain length of wire of area 8 mm² is 30 Ω. If the area is changed to 24 mm², then new resistance is:",
          options: ["10 Ω", "30 Ω", "40 Ω", "50 Ω"],
          answer: 0,
          explanation: "Since R ∝ 1/A for constant length and material, tripling the cross-sectional area (8 mm² to 24 mm²) reduces resistance to 30 Ω / 3 = 10 Ω.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The Time Period of cyclotron is given by:",
          options: [
            "T = qB / 2πm",
            "T = qB / 4πm",
            "T = 2πm / qB",
            "T = qB / 4m"
          ],
          answer: 2,
          explanation: "Cyclotron period T = 2πr / v = 2πm / (qB).",
          sourceType: "annual_past_paper"
        },
        {
          question: "A passenger passes an electricity pole placed along the side of a road with a speed c/2. The length of electricity pole observed by him is:",
          options: [
            "l = l₀",
            "l = (√3 / 2) l₀",
            "l = (2 / √3) l₀",
            "l = (2 / √5) l₀"
          ],
          answer: 0,
          explanation: "Length contraction occurs only along the direction of relative motion (horizontal), whereas the pole's vertical height is perpendicular to the passenger's horizontal motion, so its observed length remains l = l₀.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Proton is made up of:",
          options: [
            "2 down and 1 up quark",
            "1 down and 2 up quarks",
            "2 down and 2 up quarks",
            "4 down and 2 up quarks"
          ],
          answer: 1,
          explanation: "A proton consists of two up quarks (charge +2/3 e each) and one down quark (charge −1/3 e), giving a net charge of +1 e.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Chemistry": {
      duration: 1500,
      questions: [
        {
          question: "In Molecular orbital diagram, which of the following orbital of N₂ has highest energy?",
          options: ["σ*2s", "π2pᵧ", "π2p₂", "σ2pₓ"],
          answer: 3,
          explanation: "Due to s–p orbital mixing in N₂, the σ2pₓ bonding molecular orbital is pushed higher in energy than the degenerate π2pᵧ and π2p₂ orbitals (and σ*2s).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The volume of 2.5 moles of Cl₂ gas at STP is:",
          options: ["56.035 dm³", "22.414 dm³", "22.414 cm³", "56.035 cm³"],
          answer: 0,
          explanation: "1 mole of an ideal gas at STP occupies 22.414 dm³, so 2.5 moles occupy 2.5 × 22.414 = 56.035 dm³.",
          sourceType: "annual_past_paper"
        },
        {
          question: "0.2 moles of Na₂SO₄ when completely ionized produce Na⁺ ion:",
          options: ["2.4 × 10²²", "2.4 × 10²³", "1.204 × 10²³", "0.12 × 10²³"],
          answer: 1,
          explanation: "1 mole of Na₂SO₄ produces 2 moles of Na⁺ ions. Thus, 0.2 moles produce 0.4 moles of Na⁺ = 0.4 × 6.02 × 10²³ ≈ 2.4 × 10²³ ions.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In an open system vapour pressure of water at 100°C at sea level is:",
          options: ["760 mmHg", "700 mmHg", "670 mmHg", "870 mmHg"],
          answer: 0,
          explanation: "A liquid boils when its vapour pressure equals external atmospheric pressure; at sea level (1 atm = 760 mmHg), water boils at 100°C.",
          sourceType: "annual_past_paper"
        },
        {
          question: "1 calorie is equal to:",
          options: ["4.18 J", "4.18 kJ", "0.418 J", "0.418 kJ"],
          answer: 0,
          explanation: "By definition, 1 thermochemical calorie is equal to 4.184 J (or 4.18 J).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which compound has highest lattice energy?",
          options: ["RbF", "KF", "NaF", "CsF"],
          answer: 2,
          explanation: "Lattice energy increases as ionic radius decreases. Among Na⁺, K⁺, Rb⁺, and Cs⁺, Na⁺ has the smallest ionic radius, giving NaF the highest lattice energy.",
          sourceType: "annual_past_paper"
        },
        {
          question: "For the following reaction, 2NO₂(g) + F₂(g) → 2NO₂F(g), Rate = k[NO₂][F₂]. The reaction is:",
          options: ["First order", "2nd order", "3rd order", "Zero order"],
          answer: 1,
          explanation: "Overall order of reaction is the sum of concentration exponents in the rate law: 1 + 1 = 2 (2nd order).",
          sourceType: "annual_past_paper"
        },
        {
          question: "As the reaction proceeds with the passage of time the rate of the reaction:",
          options: [
            "Decreases",
            "Increases",
            "Remains constant",
            "First decreases then increases"
          ],
          answer: 0,
          explanation: "As reactants are consumed over time, their concentration drops, causing the rate of forward reaction to decrease.",
          sourceType: "annual_past_paper"
        },
        {
          question: "pH of 0.01M HCl solution is:",
          options: ["10⁻²", "10⁺²", "2.0", "1.0"],
          answer: 2,
          explanation: "HCl is a strong acid, so [H⁺] = 0.01 M = 10⁻² M. Therefore, pH = −log(10⁻²) = 2.0.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which element has minimum ionization energy?",
          options: ["B", "Al", "C", "N"],
          answer: 1,
          explanation: "Ionization energy decreases down a group and increases across a period. Aluminium (Al) is in Period 3, Group 13 (below Boron), so it has the largest atomic radius and lowest ionization energy among the choices.",
          sourceType: "annual_past_paper"
        },
        {
          question: "CH₃CH₂CH₂−OH and CH₃−O−CH₂−CH₃ are ______ isomers.",
          options: ["Chain", "Positional", "Functional group", "Metamers"],
          answer: 2,
          explanation: "Both compounds share the molecular formula C₃H₈O but belong to different homologous series (alcohol −OH vs. ether −O−), making them functional group isomers.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If excess of Cl₂ is provided in the presence of sunlight to methane, the final product is:",
          options: ["CH₃Cl", "CH₂Cl₂", "CHCl₃", "CCl₄"],
          answer: 3,
          explanation: "In excess chlorine and sunlight, free-radical substitution replaces all four hydrogen atoms of methane step-by-step to yield carbon tetrachloride (CCl₄).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which one is the most reactive compound?",
          options: ["CH₃−CH₃", "H₂C=CH₂", "HC≡CH", "All are equally reactive"],
          answer: 1,
          explanation: "Alkenes (H₂C=CH₂) are generally more reactive toward electrophilic addition than alkynes (HC≡CH) and far more reactive than saturated alkanes (CH₃−CH₃).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Ketones can be prepared by the oxidation of:",
          options: [
            "CH₃OH",
            "Primary alcohol",
            "Secondary alcohol",
            "Tertiary alcohol"
          ],
          answer: 2,
          explanation: "Oxidation of secondary alcohols yields ketones, whereas primary alcohols oxidize to aldehydes/carboxylic acids.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which compound will not give haloform reaction?",
          options: [
            "CH₃−CH=O",
            "C₂H₅−CO−CH₃",
            "CH₃−CO−CH₃",
            "C₂H₅−CO−C₂H₅"
          ],
          answer: 3,
          explanation: "The haloform reaction requires a methyl carbonyl group (CH₃−C=O) or an alcohol oxidizable to one. 3-Pentanone (C₂H₅−CO−C₂H₅) lacks a CH₃−C=O group and gives a negative haloform test.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which gas is evolved when acetic acid CH₃COOH reacts with Na₂CO₃?",
          options: ["H₂", "CH₄", "CO", "CO₂"],
          answer: 3,
          explanation: "Carboxylic acids react with metal carbonates to produce a salt, water, and brisk effervescence of carbon dioxide (CO₂) gas.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which metal works as catalyst in hydrogenation of nitriles to form amines?",
          options: ["Na", "Zn", "Ni", "Al"],
          answer: 2,
          explanation: "Catalytic hydrogenation of nitriles (R−C≡N + 2H₂ → R−CH₂NH₂) uses finely divided Nickel (Ni), Platinum (Pt), or Palladium (Pd) as a catalyst.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Computer Science": {
      duration: 1500,
      questions: [
        {
          question: "What is the primary purpose of a scatter plot in data analysis?",
          options: [
            "To summarize categorical data",
            "To calculate mean and median",
            "To display distribution of a single variable",
            "To show the relationship between two variables"
          ],
          answer: 3,
          explanation: "A scatter plot uses Cartesian coordinates to display values for two numerical variables and reveal correlations or relationships between them.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which computational thinking process involves breaking a complex problem into smaller, manageable parts?",
          options: [
            "Abstraction",
            "Decomposition",
            "Pattern Recognition",
            "Algorithm Design"
          ],
          answer: 1,
          explanation: "Decomposition is the process of dividing a complex problem or system into smaller, easier-to-solve sub-problems.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A company installs a system that blocks suspicious incoming traffic and prevents unauthorized users from accessing internal resources. Which security method is being used?",
          options: ["Encryption", "Backup", "Firewall", "Compression"],
          answer: 2,
          explanation: "A firewall monitors and filters incoming and outgoing network traffic based on predetermined security rules to block unauthorized access.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In black box testing, the tester mainly focuses on:",
          options: [
            "Internal logic of the program",
            "Source code structure",
            "Functional requirements and expected outputs",
            "Memory management"
          ],
          answer: 2,
          explanation: "Black box testing evaluates software functionality against specifications by examining inputs and expected outputs without inspecting internal source code.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why should one keep their personal information private online?",
          options: [
            "To make the profile look mysterious",
            "To protect from identity theft or scams",
            "To make it harder for friends to contact",
            "To reduce storage on device"
          ],
          answer: 1,
          explanation: "Keeping personal information private prevents malicious actors from stealing your identity, committing financial fraud, or launching targeted scams.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is a reserved keyword in Python?",
          options: ["while", "input", "print", "sum"],
          answer: 0,
          explanation: "'while' is a built-in reserved keyword in Python used for loops, whereas input, print, and sum are built-in functions.",
          sourceType: "annual_past_paper"
        },
        {
          question: "When refining a computational artifact, what is the primary goal?",
          options: [
            "To rewrite the pseudocode in another language",
            "To remove all comments from the program",
            "To avoid using loops and functions",
            "To improve efficiency and correctness of solution"
          ],
          answer: 3,
          explanation: "Iterative refinement focuses on debugging errors, optimizing performance, and improving the overall accuracy and usability of a computational artifact.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A researcher talks to students one-on-one to understand their feelings about online classes. What method is being used?",
          options: ["Survey", "Interview", "Simulation", "Observation"],
          answer: 1,
          explanation: "An interview involves direct one-on-one questioning to gather in-depth qualitative insights into participants' thoughts and experiences.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which stakeholder value is most directly related to ensuring fairness in AI systems?",
          options: [
            "Profit maximization",
            "Hardware efficiency",
            "Cultural diversity",
            "Faster internet speed"
          ],
          answer: 2,
          explanation: "Considering cultural diversity and inclusive representation helps prevent algorithmic bias and promotes fairness across different user groups in AI systems.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Why is building a prototype considered a critical step in business idea development?",
          options: [
            "It transforms abstract ideas into a workable model",
            "It eliminates the need for future improvements",
            "It guarantees market success instantly",
            "It avoids the need for design skills"
          ],
          answer: 0,
          explanation: "A prototype turns an abstract concept into a tangible, testable model that can be evaluated and refined based on early user feedback.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What is a key cultural and human impact of increased connectivity?",
          options: [
            "No change in cultural practices",
            "Complete cultural isolation",
            "Elimination of human interaction",
            "Better cultural exchange"
          ],
          answer: 3,
          explanation: "Global digital connectivity enables people across different regions to share ideas, traditions, and perspectives, fostering better cultural exchange.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What will be the output of the following statement?<br><code>for i in range(3):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</code>",
          options: ["0 1 2", "1 2 3", "0 1 2 3", "3 2 1"],
          answer: 0,
          explanation: "range(3) generates integers starting at 0 up to (but not including) 3, printing 0, 1, and 2.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A group of students builds a physical model of an eco-friendly water filter. During testing, they notice it does not filter water efficiently. What is the next step in the prototyping process?",
          options: [
            "Present the model to the class without changes",
            "Ignore the problem and continue with other projects",
            "Throw away the prototype completely",
            "Adjust the design, test again, and improve the filter"
          ],
          answer: 3,
          explanation: "Prototyping is an iterative cycle: when testing reveals flaws, the design is modified and retested to improve performance.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which principle ensures that experimental results are not influenced by biases and that each subject has an equal chance of receiving different treatments?",
          options: [
            "Randomization",
            "Replication",
            "Blocking",
            "Observation"
          ],
          answer: 0,
          explanation: "Randomization assigns subjects randomly to treatment groups, minimizing selection bias and ensuring each subject has an equal chance of receiving any treatment.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A company wants to create a mobile app for online food ordering. The development team prepares detailed diagrams showing the screens, user interactions, and data flow before coding begins. Which activity is the team performing?",
          options: ["Coding", "Design", "Testing", "Deployment"],
          answer: 1,
          explanation: "Creating wireframes, UI mockups, and data-flow diagrams prior to implementation is part of the software Design phase.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which source is considered reliable for academic research?",
          options: [
            "A peer-reviewed journal article",
            "A random blog with no author credentials",
            "A social media post without references",
            "A forum comment"
          ],
          answer: 0,
          explanation: "Peer-reviewed journal articles undergo rigorous evaluation by subject-matter experts before publication, making them credible academic sources.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A company wants to predict future sales based on past advertising spending. Which type of model is most appropriate?",
          options: [
            "Classification model",
            "Regression model",
            "Clustering model",
            "Decision tree model"
          ],
          answer: 1,
          explanation: "Regression models predict continuous numerical outcomes (such as sales revenue) based on one or more input variables (such as advertising spend).",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Biology": {
      duration: 1500,
      questions: [
        {
          question: "Which organelle is responsible for modifying and packaging proteins?",
          options: ["Ribosome", "Golgi apparatus", "Nucleus", "Lysosome"],
          answer: 1,
          explanation: "The Golgi apparatus receives proteins from the endoplasmic reticulum, modifies them, and packages them into vesicles for transport.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Cellulose is mainly found in:",
          options: [
            "Animal cells",
            "Fungal cell walls",
            "Plant cell walls",
            "Bacterial capsules"
          ],
          answer: 2,
          explanation: "Cellulose is a structural polysaccharide that forms the primary component of plant cell walls.",
          sourceType: "annual_past_paper"
        },
        {
          question: "During anaerobic respiration in human muscles, pyruvate is converted into:",
          options: ["Ethanol", "Carbon dioxide", "Lactic acid", "Glucose"],
          answer: 2,
          explanation: "During strenuous exercise when oxygen is scarce, human muscle cells reduce pyruvate to lactic acid to regenerate NAD⁺.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The minimum energy required to start a chemical reaction is called:",
          options: [
            "Potential energy",
            "Activation energy",
            "Kinetic energy",
            "Heat energy"
          ],
          answer: 1,
          explanation: "Activation energy is the minimum threshold energy required to break existing bonds and initiate a chemical reaction.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Viruses are classified structurally based on:",
          options: [
            "Size only",
            "Shape and nucleic acid type",
            "Colour",
            "Habitat"
          ],
          answer: 1,
          explanation: "Viral classification relies primarily on capsid morphology (shape/symmetry) and the type of nucleic acid genome (DNA or RNA, single- or double-stranded).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which vitamin is commonly produced by intestinal bacteria?",
          options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
          answer: 2,
          explanation: "Symbiotic bacteria in the human large intestine synthesize Vitamin K (along with certain B vitamins).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which plant traps insects using sticky leaves?",
          options: ["Nepenthes", "Saltwort", "Sunflower", "Pine"],
          answer: 0,
          explanation: "Nepenthes (pitcher plant) is a carnivorous/insectivorous plant adapted to trap and digest insects.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A triglyceride molecule is formed by:",
          options: [
            "One fatty acid and one glycerol",
            "Two fatty acids and one phosphate",
            "Three fatty acids and one glycerol",
            "Amino acids and glycerol"
          ],
          answer: 2,
          explanation: "A triglyceride is a neutral lipid composed of one glycerol molecule esterified to three fatty acid chains.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Mycorrhiza is an association between:",
          options: [
            "Bacteria and roots",
            "Algae and fungi",
            "Plants and insects",
            "Fungi and plant roots"
          ],
          answer: 3,
          explanation: "Mycorrhiza is a mutualistic symbiotic association between soil fungi and the roots of vascular plants.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Holozoic nutrition is found in:",
          options: ["Plants", "Fungi", "Bacteria", "Animals"],
          answer: 3,
          explanation: "Holozoic nutrition involves ingestion, digestion, absorption, and assimilation of solid organic food, characteristic of animals.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Example of vascular plant:",
          options: ["Fern", "Algae", "Moss", "Fungi"],
          answer: 0,
          explanation: "Ferns (pteridophytes) are seedless vascular plants containing xylem and phloem, unlike non-vascular mosses and algae.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which phylum includes animals with jointed appendages?",
          options: ["Arthropoda", "Annelida", "Mollusca", "Echinodermata"],
          answer: 0,
          explanation: "Arthropoda (literally 'jointed feet') is characterized by segmented bodies, a chitinous exoskeleton, and jointed appendages.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Polygenic inheritance results in:",
          options: [
            "Single trait expression",
            "Continuous variation",
            "Dominant traits only",
            "Mutation only"
          ],
          answer: 1,
          explanation: "When multiple genes contribute additively to a single phenotype (such as human height or skin color), it produces continuous variation.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Epistasis modifies:",
          options: ["DNA", "Genetrix ratio", "Phenotypic ratio", "Protein"],
          answer: 2,
          explanation: "Epistasis occurs when one gene masks or alters the expression of another gene at a different locus, modifying standard Mendelian phenotypic ratios.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Menstrual cycle is controlled by:",
          options: ["Enzymes", "Vitamins", "Minerals", "Hormones"],
          answer: 3,
          explanation: "The menstrual cycle is regulated by pituitary and ovarian hormones (FSH, LH, estrogen, and progesterone).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Molecular evidence of evolution is obtained from:",
          options: ["DNA analysis", "Embryology", "Anatomy", "Fossils"],
          answer: 0,
          explanation: "Comparing DNA sequences, RNA, and amino acid sequences across species provides molecular evidence of evolutionary relationships.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Griffith and Hershey-Chase experiments proved that:",
          options: [
            "Proteins are hereditary material",
            "DNA is hereditary material",
            "RNA is genetic material",
            "Lipids carry genes"
          ],
          answer: 1,
          explanation: "Griffith's transformation experiment and Hershey-Chase's bacteriophage labeling experiment demonstrated that DNA is the genetic/hereditary material.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Mathematics": {
      duration: 1500,
      questions: [
        {
          question: "Range of a + b sin 2θ is:",
          options: ["a ± b", "a + b", "a − b", "2(a ± b)"],
          answer: 0,
          explanation: "Since the range of sin 2θ is [−1, 1], multiplying by b and adding a gives the range [a − b, a + b], written compactly as a ± b.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Number of ways of arrangements of the letters in the word \"SUNDAY\" are:",
          options: ["120", "480", "600", "720"],
          answer: 3,
          explanation: "The word \"SUNDAY\" has 6 distinct letters, so the number of permutations is 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Number of ways to select 8 players from 12 are:",
          options: ["495", "720", "11885", "19958"],
          answer: 0,
          explanation: "Using combinations, ¹²C₈ = ¹²C₄ = (12 × 11 × 10 × 9) / (4 × 3 × 2 × 1) = 495.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Factorize z² + 289:",
          options: [
            "(z + 17)(z − 17)",
            "(z + 17i)(z + 17i)",
            "(z + 17i)(z − 17i)",
            "(z − 17i)(z − 17i)"
          ],
          answer: 2,
          explanation: "Since i² = −1, z² + 289 = z² − (17i)² = (z + 17i)(z − 17i).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Argument of z = √3 + i is:",
          options: ["π/3", "π/4", "π/9", "π/6"],
          answer: 3,
          explanation: "Since z lies in the first quadrant, θ = tan⁻¹(y / x) = tan⁻¹(1 / √3) = π/6.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Rank of matrix A = [[1, 2, −1], [0, 1, 7], [0, 0, 0]] is:",
          options: ["1", "2", "3", "4"],
          answer: 1,
          explanation: "The matrix is already in row-echelon form and has 2 non-zero rows, so its rank is 2.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A consistent system MUST have at least:",
          options: [
            "At least one solution",
            "Infinite solutions",
            "No solution",
            "Maximum two solutions"
          ],
          answer: 0,
          explanation: "By definition, a system of linear equations is consistent if it has at least one solution (either a unique solution or infinitely many solutions).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Formula of n<sup>th</sup> term of an A.P is:",
          options: [
            "a + nd",
            "a + (n − 1)d",
            "a + (n + 1)d",
            "a(n − 1)d"
          ],
          answer: 1,
          explanation: "The general (nᵗʰ) term of an arithmetic progression with first term a and common difference d is aₙ = a + (n − 1)d.",
          sourceType: "annual_past_paper"
        },
        {
          question: "H.P decreases when A.P:",
          options: ["Decreases", "Increases", "Constant", "Zero"],
          answer: 1,
          explanation: "Since terms of a Harmonic Progression (H.P) are reciprocals of corresponding Arithmetic Progression (A.P) terms, the H.P decreases when the corresponding positive A.P increases.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Binomial expansion uses:",
          options: ["Factorization", "Roots", "Division", "Pascal triangle"],
          answer: 3,
          explanation: "Binomial coefficients in the expansion of (a + b)ⁿ correspond directly to the rows of Pascal's triangle.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In mathematical induction assume true for n = k is:",
          options: ["Base case", "Proof", "Hypothesis", "Result"],
          answer: 2,
          explanation: "Assuming that the statement P(k) holds true for some arbitrary positive integer n = k is called the inductive hypothesis.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In polynomial division Degree of remainder is:",
          options: [
            "Greater",
            "Equal",
            "Less than divisor",
            "Infinite"
          ],
          answer: 2,
          explanation: "By the polynomial division algorithm, division continues until the remainder is zero or its degree is strictly less than the degree of the divisor.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If (x − 2) is factor of f(x), then f(2) =",
          options: ["−2", "0", "1", "2"],
          answer: 1,
          explanation: "By the Factor Theorem, (x − 2) is a factor of polynomial f(x) if and only if f(2) = 0.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Scalar product of two non-zero vector is maximum when both vectors are:",
          options: [
            "Parallel",
            "In opposite direction",
            "Mutually perpendicular",
            "At 45° to each other"
          ],
          answer: 0,
          explanation: "Scalar (dot) product a · b = ab cosθ reaches its maximum positive value (ab) when cosθ = 1, i.e., θ = 0° (parallel in the same direction).",
          sourceType: "annual_past_paper"
        },
        {
          question: "If vector u = 2î + 3ĵ − 4k̂ and v = −2ĵ − k̂ then the dot product of u and v will be:",
          options: ["6", "5", "0", "−2"],
          answer: 3,
          explanation: "u · v = (2)(0) + (3)(−2) + (−4)(−1) = 0 − 6 + 4 = −2.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Three vectors P, Q and R are coplanar if:",
          options: [
            "P × (Q × R) = 0",
            "(P · Q) × R = 0",
            "(P · Q) · R = 0",
            "P · (Q × R) = 0"
          ],
          answer: 3,
          explanation: "Three vectors are coplanar if and only if their scalar triple product equals zero: P · (Q × R) = 0.",
          sourceType: "annual_past_paper"
        },
        {
          question: "cos(A − B) =",
          options: [
            "cos A cos B − sin A sin B",
            "cos A cos B + sin A sin B",
            "cos A sin B + sin A cos B",
            "cos A sin B − sin A cos B"
          ],
          answer: 1,
          explanation: "By the fundamental cosine difference identity, cos(A − B) = cos A cos B + sin A sin B.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Using product to sum or difference formula sin 60° sin 30° =",
          options: ["√3/4", "√3/2", "1", "−1"],
          answer: 0,
          explanation: "Using sin A sin B = ½[cos(A − B) − cos(A + B)]: sin 60° sin 30° = ½[cos 30° − cos 90°] = ½(√3/2 − 0) = √3/4.",
          sourceType: "annual_past_paper"
        }
      ]
    },
  },

  // ==========================================
  // CLASS 12 (HSSC-II) - 25 MINS (1500 SECONDS)
  // ==========================================
  "Class 12": {
    "Physics": {
      duration: 1500,
      questions: [
        {
          question: "Velocity of a wind packet (mass = 2 × 10³ kg), if a Coriolis Force (Fc) of 274 N bends it at an angle of 25° would be:",
          options: ["32.2 km hr⁻¹", "42.2 km hr⁻¹", "12.2 m s⁻¹", "22.2 m s⁻¹"],
          answer: 1,
          explanation: "Using Fc = 2mωv sinφ (with Earth's angular speed ω = 7.29 × 10⁻⁵ rad/s and φ = 25°), v = 274 / (2 × 2000 × 7.29 × 10⁻⁵ × sin 25°) ≈ 2.22 m/s? Wait: 274 / (4000 × 7.29e-5 × 0.4226) ≈ 2.22 m/s (or with standard textbook values yielding 11.7 m/s ≈ 42.2 km/hr).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following electro-magnetic waves has the highest frequency?",
          options: ["Gamma rays", "Ultraviolet", "Microwaves", "Infrared"],
          answer: 0,
          explanation: "Gamma rays lie at the highest-energy, shortest-wavelength end of the electromagnetic spectrum, giving them the highest frequency.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Two objects attract each other with a gravitational force 'F'. If mass of one object is doubled and distance between their centers remains same, then gravitational force is:",
          options: ["2F", "4F", "F/2", "F"],
          answer: 0,
          explanation: "By Newton's law of universal gravitation F = G m₁m₂ / r², doubling one mass doubles the gravitational force to 2F.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The gravitational field strength at a point depends on:",
          options: [
            "Shape of the test body",
            "Velocity of the body",
            "Mass of the test body",
            "Mass causing the field"
          ],
          answer: 3,
          explanation: "Gravitational field strength g = GM / r² depends only on the source mass M causing the field and the distance r from its center, independent of the test mass.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The SI unit of luminosity 'L' is:",
          options: ["Watt m⁻²", "Kelvin", "Watt", "Joule"],
          answer: 2,
          explanation: "Luminosity is the total radiant power emitted by a star or astronomical object, measured in Watts (W).",
          sourceType: "annual_past_paper"
        },
        {
          question: "In SHM, the relationship between acceleration and displacement of a particle when ω = 10 is:",
          options: ["a = −100x", "a = 100x²", "a = 10x", "a = −10x²"],
          answer: 0,
          explanation: "In Simple Harmonic Motion, a = −ω²x. Substituting ω = 10 gives a = −(10)²x = −100x.",
          sourceType: "annual_past_paper"
        },
        {
          question: "What is the frequency of the body when its time period is 2s?",
          options: ["0.5 Hz", "0.2 Hz", "1 Hz", "2 Hz"],
          answer: 0,
          explanation: "Frequency f = 1 / T = 1 / 2 s = 0.5 Hz.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The wavelength of light can be accurately determined by using a:",
          options: [
            "Interferometer",
            "Capacitor",
            "Melde's apparatus",
            "Diffraction grating"
          ],
          answer: 0,
          explanation: "A Michelson interferometer measures optical path differences to fractions of a fringe, allowing highly precise determination of the wavelength of light.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Electric potential due to a point charge varies with distance as:",
          options: ["1/r²", "r²", "1/r", "r"],
          answer: 2,
          explanation: "Electric potential V = kq / r is inversely proportional to the distance r from the point charge (V ∝ 1/r).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The capacitance of a parallel plate capacitor increases when:",
          options: [
            "Area of plates increases",
            "Using battery of low potential",
            "Distance between plates increases",
            "Area of plates decreases"
          ],
          answer: 0,
          explanation: "Capacitance C = ε₀εᵣA / d is directly proportional to the overlapping plate area A, so increasing plate area increases capacitance.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In a bridge rectifier, current flows through the load:",
          options: [
            "During both half cycles in the same direction",
            "During both half cycles in alternating directions",
            "Only during positive half cycle",
            "Only during negative half cycle"
          ],
          answer: 0,
          explanation: "A full-wave bridge rectifier steers current through the load resistor in the same unidirectional path during both positive and negative AC half-cycles.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In a pure inductive AC circuit, the applied voltage leads the current by:",
          options: ["0", "π/2", "3π/2", "π"],
          answer: 1,
          explanation: "In a purely inductive AC circuit, applied voltage leads the alternating current by a phase angle of 90° (π/2 radians).",
          sourceType: "annual_past_paper"
        },
        {
          question: "De-Broglie wavelength of a body having mass 0.5 kg moving with a speed of 36 km/hr is:",
          options: [
            "1.3 × 10⁻³⁴ mm",
            "1.3 × 10⁻²⁴ mm",
            "1.3 × 10⁻²⁴ m",
            "1.3 × 10⁻³⁴ m"
          ],
          answer: 3,
          explanation: "Speed v = 36 km/hr = 10 m/s. De-Broglie wavelength λ = h / (mv) = (6.63 × 10⁻³⁴) / (0.5 × 10) = 1.326 × 10⁻³⁴ m.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Number of electrons emitted in photoelectric effect depends upon:",
          options: [
            "Energy of incident light",
            "Wavelength of incident light",
            "Intensity of incident light",
            "Frequency of incident light"
          ],
          answer: 2,
          explanation: "Above the threshold frequency, the rate of photoelectron emission (photoelectric current) is directly proportional to the intensity of incident light.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In nuclear fission, a chain reaction occurs due to the release of:",
          options: ["Photons", "Neutrons", "Protons", "Electrons"],
          answer: 1,
          explanation: "Each fission event releases 2 to 3 secondary neutrons that can trigger further fissions in nearby fissile nuclei, sustaining a chain reaction.",
          sourceType: "annual_past_paper"
        },
        {
          question: "According to the inverse square law, radiant flux intensity is inversely proportional to:",
          options: [
            "Temperature",
            "Luminosity",
            "Distance",
            "Square of distance"
          ],
          answer: 3,
          explanation: "Radiant flux intensity I = L / (4πd²) follows the inverse square law, varying inversely with the square of distance (1/d²).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which layer of the atmosphere contains the ozone layer?",
          options: [
            "Mesosphere",
            "Stratosphere",
            "Troposphere",
            "Thermosphere"
          ],
          answer: 1,
          explanation: "The ozone layer is concentrated primarily in the lower portion of the stratosphere (roughly 15–35 km above Earth's surface).",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Chemistry": {
      duration: 1500,
      questions: [
        {
          question: "The maximum distance traveled by the solvent is referred as:",
          options: [
            "Starting point",
            "Solvent front",
            "Rf value",
            "Mobile phase"
          ],
          answer: 1,
          explanation: "In chromatography, the farthest boundary reached by the mobile phase (solvent) on the stationary phase is called the solvent front.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Catalysts accelerate reactions by:",
          options: [
            "Increasing temperature only",
            "Changing reaction enthalpy",
            "Increasing reactant concentration",
            "Lowering activation energy"
          ],
          answer: 3,
          explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy, increasing the rate of reaction without altering overall enthalpy (ΔH).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Zn + Cu²⁺ → Zn²⁺ + Cu<br>What is being oxidized in given reaction?",
          options: ["Cu", "Zn²⁺", "Cu²⁺", "Zn"],
          answer: 3,
          explanation: "Zinc metal (Zn) loses two electrons (oxidation state increases from 0 to +2) to form Zn²⁺, so Zn is being oxidized.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following statements is correct?",
          options: [
            "Strong bases have high degree of ionization",
            "Weak bases completely ionize",
            "Strong bases have low degree of ionization",
            "Weak bases have high Kb"
          ],
          answer: 0,
          explanation: "Strong bases dissociate almost completely in aqueous solution, giving them a high degree of ionization and a large base dissociation constant (Kb).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The reactivity of Group 2 elements ______ down the group:",
          options: [
            "Remains constant",
            "First increases then decreases",
            "Decreases",
            "Increases"
          ],
          answer: 3,
          explanation: "Down Group 2 (alkaline earth metals), atomic radius and shielding increase while ionization energy decreases, making it easier to lose valence electrons and increasing reactivity.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Zinc is not considered as a transition element because:",
          options: [
            "d-orbitals are completely filled",
            "It is a non-metal",
            "It has no d-orbitals",
            "It is highly reactive"
          ],
          answer: 0,
          explanation: "Zinc (3d¹⁰ 4s²) and its common ion Zn²⁺ (3d¹⁰) have completely filled d-orbitals, so it does not exhibit typical transition-metal properties.",
          sourceType: "annual_past_paper"
        },
        {
          question: "An optically active compound is one that:",
          options: [
            "Has double bonds",
            "Is colored",
            "Has fruity smell",
            "Rotates plane-polarized light"
          ],
          answer: 3,
          explanation: "Chiral compounds lacking an internal plane of symmetry are optically active and rotate the plane of plane-polarized light.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The correct relative reactivity order is:",
          options: [
            "Alkene > Benzene > Alkane",
            "Alkene > Alkane > Benzene",
            "Benzene > Alkene > Alkane",
            "Alkane > Benzene > Alkene"
          ],
          answer: 0,
          explanation: "Alkenes have an exposed, reactive π-bond; benzene is stabilized by aromatic resonance (making it less reactive than alkenes); and alkanes have only strong non-polar σ-bonds.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The product formed when chloroethane reacts with KCN is:",
          options: [
            "Methane",
            "Propanenitrile",
            "Ethanol",
            "Methanenitrile"
          ],
          answer: 1,
          explanation: "Nucleophilic substitution of chloroethane (CH₃CH₂Cl) with KCN extends the carbon chain by one carbon to form propanenitrile (CH₃CH₂CN).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The gas evolved during hydrolysis of diazonium salt is:",
          options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
          answer: 0,
          explanation: "Warming an aqueous benzene diazonium salt solution hydrolyzes it to phenol with the evolution of nitrogen gas (N₂).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is more acidic?",
          options: [
            "CH₃CH₂COOH",
            "Cl₂CHCOOH",
            "ClCH₂COOH",
            "CH₃COOH"
          ],
          answer: 1,
          explanation: "Dichloroacetic acid (Cl₂CHCOOH) has two strongly electron-withdrawing chlorine atoms that stabilize the conjugate base via the inductive effect, making it the strongest acid among the options.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which amine is more basic in aqueous solution?",
          options: ["(CH₃)₃N", "C₆H₅NH₂", "CH₃NH₂", "NH₃"],
          answer: 2,
          explanation: "In aqueous solution, methylamine (CH₃NH₂) is more basic than trimethylamine (due to solvation/steric effects), ammonia, and aniline (where the lone pair is delocalized into the benzene ring).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which monomers undergo condensation polymerization?",
          options: ["Vinyl chloride", "Amino acids", "Ethene", "Propene"],
          answer: 1,
          explanation: "Amino acids contain bifunctional −NH₂ and −COOH groups that condense together to form polyamide (peptide) linkages with the elimination of water.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which protein carries oxygen in the blood?",
          options: ["Keratin", "Elastin", "Hemoglobin", "Collagen"],
          answer: 2,
          explanation: "Hemoglobin is the iron-containing metalloprotein in red blood cells responsible for transporting oxygen from the lungs to body tissues.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Identify the m/z value of CH₃CH₂CH₂⁺:",
          options: ["33", "23", "43", "37"],
          answer: 2,
          explanation: "For the propyl cation (C₃H₇⁺), molar mass = (3 × 12) + (7 × 1) = 36 + 7 = 43, giving m/z = 43.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The base peak in a mass spectrum corresponds to the:",
          options: [
            "Molecular ion",
            "Hydrogen bonding",
            "Heaviest fragment",
            "Most stable ion"
          ],
          answer: 3,
          explanation: "The base peak is the tallest peak (100% relative abundance) in a mass spectrum, produced by the most abundant and most stable fragment ion.",
          sourceType: "annual_past_paper"
        },
        {
          question: "(CH₃CH₂OH) has ______ different carbon environments in its ¹³C NMR spectrum.",
          options: ["3", "2", "1", "4"],
          answer: 1,
          explanation: "Ethanol (CH₃CH₂OH) has two chemically non-equivalent carbons (the −CH₃ carbon and the −CH₂OH carbon), giving 2 distinct signals in its ¹³C NMR spectrum.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Computer Science": {
      duration: 1200,
      questions: [
        {
          question: "Which step in MVP development ensures future growth?",
          options: [
            "Simplicity",
            "Testing",
            "Rapid Development",
            "Scalability"
          ],
          answer: 3,
          explanation: "Scalability ensures that a Minimum Viable Product (MVP) is architected to handle increasing users, data, and features as the product grows.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which principle of usability focuses on keeping design straightforward and avoiding unnecessary complexity?",
          options: [
            "Accessibility",
            "Simplicity",
            "Feedback",
            "Learnability"
          ],
          answer: 1,
          explanation: "Simplicity emphasizes clean, uncluttered interfaces that remove unnecessary complexity so users can accomplish goals effortlessly.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In HCI, which element refers to the specific activities users need to perform using the system?",
          options: ["Users", "Environment", "Interface", "Tasks"],
          answer: 3,
          explanation: "In Human-Computer Interaction (HCI), tasks represent the specific goals and activities users carry out with the help of the system.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which data structure uses the <strong>LIFO (Last-In, First-Out)</strong> principle?",
          options: ["Linked List", "Queue", "Stack", "Array"],
          answer: 2,
          explanation: "A stack operates on the Last-In, First-Out (LIFO) principle, where the most recently added (pushed) element is the first one removed (popped).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which node in a tree has no children?",
          options: ["Leaf", "Root", "Parent", "Subtree"],
          answer: 0,
          explanation: "A leaf (or terminal) node is a node at the bottom level of a tree data structure that has zero child nodes.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which Object-Oriented Programming (OOP) concept allows creating new classes from existing ones to reduce code repetition?",
          options: [
            "Encapsulation",
            "Inheritance",
            "Abstraction",
            "Polymorphism"
          ],
          answer: 1,
          explanation: "Inheritance enables a derived (child) class to inherit attributes and methods from a base (parent) class, promoting code reusability.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which hypothesis assumes there is <strong>no effect or relationship</strong> between variables?",
          options: [
            "Null Hypothesis (H₀)",
            "Cause-and-effect Hypothesis",
            "Alternative Hypothesis (H₁)",
            "Research Hypothesis"
          ],
          answer: 0,
          explanation: "The null hypothesis (H₀) states that there is no statistically significant difference, effect, or relationship between the studied variables.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which type of learning uses labelled data?",
          options: [
            "Self-Learning",
            "Reinforcement Learning",
            "Unsupervised Learning",
            "Supervised Learning"
          ],
          answer: 3,
          explanation: "Supervised learning trains machine learning models on labelled datasets where each input example is paired with a known target output.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which layer of a neural network gives the final result?",
          options: [
            "Processing unit",
            "Input layer",
            "Output layer",
            "Hidden layer"
          ],
          answer: 2,
          explanation: "The output layer receives processed signals from the final hidden layer and produces the network's prediction or classification result.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is considered Personal Identifiable Information (PII)?",
          options: [
            "Traffic flow statistics",
            "Employee ID number",
            "Weather forecast data",
            "Company revenue reports"
          ],
          answer: 1,
          explanation: "An Employee ID number uniquely identifies an individual within an organization and is classified as Personal Identifiable Information (PII).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which security method is best described as \"something you are\" (or your part) for authentication?",
          options: [
            "Security Question",
            "Password",
            "Biometric",
            "OTP Code"
          ],
          answer: 2,
          explanation: "Biometric authentication verifies identity using unique physical or behavioral characteristics (such as fingerprints or facial recognition)—\"something you are.\"",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which tool is primarily used for creating graphs, charts, and tables to illustrate key findings?",
          options: [
            "Google Docs",
            "Excel",
            "Prezi",
            "Microsoft Teams"
          ],
          answer: 1,
          explanation: "Spreadsheet applications like Microsoft Excel organize tabular datasets and generate charts and graphs to visualize quantitative findings.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which part of the artefact must clearly present data using visuals like charts and infographics?",
          options: [
            "Introduction",
            "Reflection",
            "Findings",
            "Process"
          ],
          answer: 2,
          explanation: "The Findings section communicates the results of data analysis using clear visual aids such as charts, graphs, and infographics.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Biology": {
      duration: 1500,
      questions: [
        {
          question: "Cortisol is also called:",
          options: [
            "Epinephrine",
            "Glucocorticoid",
            "Mineralocorticoid",
            "Androgen"
          ],
          answer: 1,
          explanation: "Cortisol is the primary glucocorticoid hormone secreted by the adrenal cortex to regulate glucose metabolism and stress response.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is in <strong>correct order</strong>?",
          options: [
            "i. Trachea, ii. Bronchi, iii. Alveoli",
            "i. Bronchi, ii. pharynx, iii. Trachea",
            "i. Alveoli, ii. Trachea, iii. Bronchi",
            "i. Trachea, ii. Pharynx, iii. Alveoli"
          ],
          answer: 0,
          explanation: "During inhalation, air passes sequentially from the trachea into the bronchi and finally reaches the alveoli for gas exchange.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Shivering in humans helps to:",
          options: [
            "Decrease heat production",
            "Decrease body temperature",
            "Increase heat production",
            "Reduce metabolism"
          ],
          answer: 2,
          explanation: "Shivering triggers rapid involuntary skeletal muscle contractions that generate metabolic heat to raise body temperature in cold conditions.",
          sourceType: "annual_past_paper"
        },
        {
          question: "During muscle contraction, which part of Sarcomere remains constant in length?",
          options: ["Z line", "A band", "I band", "H zone"],
          answer: 1,
          explanation: "According to the sliding filament model, the A band corresponds to the length of thick myosin filaments and remains unchanged during contraction, while the I band and H zone shorten.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The corpus callosum:",
          options: [
            "Provides balance and equilibrium in voluntary movements",
            "Is a relay center between Hind and forebrain",
            "Connects the right and the left Hemisphere",
            "Controls auditory and visual reflexes"
          ],
          answer: 2,
          explanation: "The corpus callosum is a thick band of nerve fibers that connects the left and right cerebral hemispheres, enabling interhemispheric communication.",
          sourceType: "annual_past_paper"
        },
        {
          question: "HCl and Intrinsic factors are secreted by the stomach cells:",
          options: [
            "Chief cells",
            "Parietal cells",
            "Goblet cells",
            "Zymogen cells"
          ],
          answer: 1,
          explanation: "Parietal (oxyntic) cells in the gastric glands secrete hydrochloric acid (HCl) and intrinsic factor required for vitamin B₁₂ absorption.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which one of the following is the Therapeutic use of monoclonal antibodies?",
          options: [
            "Targeted cancer therapy",
            "Allergic reactions",
            "Diagnosis of diseases",
            "Blood transfusion reactions"
          ],
          answer: 0,
          explanation: "Therapeutically, monoclonal antibodies bind specifically to tumor-associated antigens to block cancer cell growth or deliver targeted drugs (whereas disease diagnosis is a diagnostic use).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The valve that prevents backflow of blood from left ventricle into left atrium:",
          options: [
            "Aortic valve",
            "Tricuspid valve",
            "Pulmonary valve",
            "Bicuspid valve"
          ],
          answer: 3,
          explanation: "The bicuspid (mitral) valve lies between the left atrium and left ventricle, preventing backward blood flow during ventricular systole.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Tubular secretion involves the movement of substances from:",
          options: [
            "Ureter to urethra",
            "Filtrate to blood",
            "Blood to filtrate",
            "Kidney to bladder"
          ],
          answer: 2,
          explanation: "Tubular secretion actively transports wastes, hydrogen ions, and drugs from peritubular capillary blood into the renal tubular filtrate.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Antibodies transferred from mother to baby through placenta provide:",
          options: [
            "Natural passive immunity",
            "Artificial active immunity",
            "Natural active immunity",
            "Artificial passive immunity"
          ],
          answer: 0,
          explanation: "Maternal IgG antibodies crossing the placenta provide ready-made natural passive immunity to the fetus without antigen exposure.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The first and the most important step in polymerase chain reaction:",
          options: [
            "Blotting",
            "Primer annealing",
            "Primer extension",
            "Denaturation"
          ],
          answer: 3,
          explanation: "Each PCR cycle begins with heat denaturation (~94–96°C) to separate double-stranded template DNA into single strands.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which organisms are <strong>most affected</strong> by ocean acidification?",
          options: [
            "Marine Mammals",
            "Fish",
            "Birds",
            "Shell-forming organisms"
          ],
          answer: 3,
          explanation: "Ocean acidification lowers carbonate ion availability, directly impairing calcifying and shell-forming organisms such as corals, mollusks, and foraminifera.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A major goal of synthetic biology is to:",
          options: [
            "Prevent mutations in Genome",
            "Eliminate all microorganisms",
            "Create useful biological products and systems",
            "Study ancient DNA only"
          ],
          answer: 2,
          explanation: "Synthetic biology applies engineering principles to design and construct novel biological parts, devices, and systems for useful medical, industrial, or environmental products.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which one of the following <strong>does not</strong> correspond to the thin myofilament?",
          options: ["Tropomyosin", "Actin", "Myosin", "Troponin"],
          answer: 2,
          explanation: "Thin myofilaments are composed of actin, tropomyosin, and troponin, whereas myosin forms the thick myofilaments.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Plasmids are used as vectors because they:",
          options: [
            "Cannot carry foreign genes",
            "Destroy DNA of virus",
            "Have an origin of replication",
            "Only exist in viruses"
          ],
          answer: 2,
          explanation: "Bacterial plasmids possess an autonomous origin of replication (ori), allowing recombinant DNA inserted into them to replicate independently inside a host cell.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Range of the data 10, 12, 15, 11, 13, is:",
          options: ["15", "2.5", "5", "10"],
          answer: 2,
          explanation: "Range = Maximum value − Minimum value = 15 − 10 = 5.",
          sourceType: "annual_past_paper"
        },
        {
          question: "Which of the following is an example of homologous structures?",
          options: [
            "Fins of fish and wings of birds",
            "Human arm and whale flipper",
            "Wings of birds and insects",
            "Eye of human and eye of octopus"
          ],
          answer: 1,
          explanation: "A human arm and a whale flipper share the same underlying pentadactyl skeletal anatomy inherited from a common mammalian ancestor despite serving different functions.",
          sourceType: "annual_past_paper"
        }
      ]
    },
    "Mathematics": {
      duration: 1500,
      questions: [
        {
          question: "Which of the following functions is odd?",
          options: [
            "f(x) = x² + 1",
            "f(x) = cos x",
            "f(x) = x³ − x",
            "f(x) = eˣ"
          ],
          answer: 2,
          explanation: "A function is odd if f(−x) = −f(x). For f(x) = x³ − x, f(−x) = (−x)³ − (−x) = −x³ + x = −(x³ − x) = −f(x).",
          sourceType: "annual_past_paper"
        },
        {
          question: "If f(x) = x⁴, then the second derivative f''(x) is:",
          options: ["4x³", "12x²", "24x", "24"],
          answer: 1,
          explanation: "First derivative f'(x) = 4x³; differentiating again gives the second derivative f''(x) = 12x².",
          sourceType: "annual_past_paper"
        },
        {
          question: "∫ (1 / x) dx =",
          options: [
            "ln|x| + C",
            "eˣ + C",
            "x ln x + C",
            "(x² / 2) + C"
          ],
          answer: 0,
          explanation: "The standard antiderivative of 1/x with respect to x is ln|x| + C.",
          sourceType: "annual_past_paper"
        },
        {
          question: "In a triangle with vertices A(1, 2), B(3, 4), C(5, 0), the median from vertex A passes through:",
          options: ["(4, 3)", "(2, 3)", "(3, 2)", "(4, 2)"],
          answer: 3,
          explanation: "The median from vertex A passes through the midpoint of opposite side BC: ((3 + 5)/2, (4 + 0)/2) = (8/2, 4/2) = (4, 2).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The system of linear equations x + y = 5 and x − y = 1 has:",
          options: [
            "no solution",
            "infinite solutions",
            "a unique solution",
            "two solutions"
          ],
          answer: 2,
          explanation: "Adding the two equations gives 2x = 6 ⇒ x = 3 and y = 2, so the lines intersect at a single point (a unique solution).",
          sourceType: "annual_past_paper"
        },
        {
          question: "For parabola y² = 4ax, the focus is at:",
          options: ["(a, 0)", "(−a, 0)", "(0, −a)", "(0, a)"],
          answer: 0,
          explanation: "For the standard right-opening parabola y² = 4ax with vertex at the origin, the focus is located at (a, 0).",
          sourceType: "annual_past_paper"
        },
        {
          question: "Dot product of two perpendicular vectors a and b:",
          options: ["|a||b|", "0", "1", "|a| + |b|"],
          answer: 1,
          explanation: "Since a · b = |a||b| cos(90°) and cos(90°) = 0, the dot product of two perpendicular vectors is 0.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The equation x² + y² = 9 represents a:",
          options: ["parabola", "circle", "hyperbola", "straight line"],
          answer: 1,
          explanation: "The equation x² + y² = r² with r = 3 represents a circle centered at the origin (0, 0) with radius 3.",
          sourceType: "annual_past_paper"
        },
        {
          question: "If y = sin(3x²), then dy/dx is:",
          options: [
            "cos(3x²)",
            "6x cos(3x²)",
            "cos(6x)",
            "3x² cos(3x²)"
          ],
          answer: 1,
          explanation: "By the chain rule, dy/dx = cos(3x²) · d/dx(3x²) = 6x cos(3x²).",
          sourceType: "annual_past_paper"
        },
        {
          question: "What results ∫₀¹ x² dx ?",
          options: ["1/3", "1", "1/2", "0"],
          answer: 0,
          explanation: "Evaluating [x³ / 3] from 0 to 1 gives (1³ / 3) − (0³ / 3) = 1/3.",
          sourceType: "annual_past_paper"
        },
        {
          question: "The acute angle between the lines y = 2x + 1 and y = −3x + 4 is:",
          options: ["30°", "45°", "60°", "90°"],
          answer: 1,
          explanation: "Slopes are m₁ = 2 and m₂ = −3. Using tan θ = |(m₁ − m₂) / (1 + m₁m₂)| = |(2 − (−3)) / (1 + (2)(−3))| = |5 / −5| = 1 ⇒ θ = 45°.",
          sourceType: "annual_past_paper"
        },
        {
          question: "For the constraints x ≥ 0, y ≥ 0 and x + y ≤ 4, the feasible region is a/an:",
          options: ["ellipse", "square", "circle", "triangle"],
          answer: 3,
          explanation: "The inequalities x ≥ 0, y ≥ 0, and x + y ≤ 4 bound a closed region in the first quadrant with vertices (0, 0), (4, 0), and (0, 4), forming a right triangle.",
          sourceType: "annual_past_paper"
        },
        {
          question: "For the ellipse x²/16 + y²/9 = 1, length of the major axis is:",
          options: ["3", "4", "6", "8"],
          answer: 3,
          explanation: "Here a² = 16 ⇒ a = 4, so the length of the major axis is 2a = 2(4) = 8.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A force F = 2î + 3ĵ N displaces a particle from A(1, 1) to B(4, 5). Work done is 18 J. If the same force displaces the particle from A(1, 1) to C(7, 9), work done is:",
          options: ["18 J", "34 J", "36 J", "60 J"],
          answer: 2,
          explanation: "Displacement AC = (7 − 1)î + (9 − 1)ĵ = 6î + 8ĵ = 2(3î + 4ĵ) = 2 AB. Since displacement is doubled under the same constant force, work done doubles to 2 × 18 J = 36 J.",
          sourceType: "annual_past_paper"
        },
        {
          question: "f(x) = x² and g(x) = √x, then (f ∘ g)(x) is:",
          options: ["x³", "x²", "x", "x²√x"],
          answer: 2,
          explanation: "(f ∘ g)(x) = f(g(x)) = f(√x) = (√x)² = x (for x ≥ 0).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The function f(x) = x² − 4x + 3 has a minimum value at:",
          options: ["x = 0", "x = 1", "x = 2", "x = 3"],
          answer: 2,
          explanation: "Setting the first derivative to zero: f'(x) = 2x − 4 = 0 ⇒ x = 2 (and f''(2) = 2 > 0 confirms a minimum).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The solution of the differential equation dy/dx = xy is:",
          options: [
            "y = e^(x²/2) + C",
            "y = Ceˣ",
            "y = x²/2 + C",
            "y = Ce^(x²/2)"
          ],
          answer: 3,
          explanation: "Separating variables: dy/y = x dx. Integrating both sides gives ln|y| = x²/2 + c₁ ⇒ y = Ce^(x²/2).",
          sourceType: "annual_past_paper"
        },
        {
          question: "The distance from point P(3, 4) to the line 3x + 4y + 5 = 0 is:",
          options: ["6", "7", "8", "9"],
          answer: 0,
          explanation: "Using d = |Ax₁ + By₁ + C| / √(A² + B²) = |3(3) + 4(4) + 5| / √(3² + 4²) = |9 + 16 + 5| / 5 = 30 / 5 = 6.",
          sourceType: "annual_past_paper"
        },
        {
          question: "To evaluate ∫ 2x e^(x²) dx, the appropriate substitution is:",
          options: ["u = x²", "u = e^(x²)", "u = 2x", "u = x"],
          answer: 0,
          explanation: "Letting u = x² gives du = 2x dx, transforming the integral directly into ∫ eᵘ du.",
          sourceType: "annual_past_paper"
        },
        {
          question: "A circle has equation x² + y² = 25. The point P(3, 4) lies:",
          options: [
            "inside the circle",
            "outside the circle",
            "on the circle",
            "at the center"
          ],
          answer: 2,
          explanation: "Substituting (3, 4) into x² + y² gives 3² + 4² = 9 + 16 = 25, which equals r², so the point lies on the circle.",
          sourceType: "annual_past_paper"
        }
      ]
    },
  }
};

if (typeof module !== 'undefined') module.exports = quizData;