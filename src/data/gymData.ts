export interface GymHours {
  day: string;
  dayShort: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday, etc.
  open: string;
  close: string;
  isOpen: boolean;
  busyHours: string;
}

export interface GymData {
  name: string;
  tagline: string;
  subtagline: string;
  phone: string;
  phoneRaw: string;
  address: string;
  city: string;
  postalCode: string;
  email: string;
  instagram: string;
  facebook: string;
  googleMapsUrl: string;
  hours: GymHours[];
  pricing: {
    id: string;
    title: string;
    duration: string;
    price: number;
    popular?: boolean;
    description: string;
    features: string[];
  }[];
  equipmentCategories: {
    id: string;
    title: string;
    description: string;
    items: string[];
  }[];
  reviews: {
    name: string;
    role: string;
    rating: number;
    text: string;
    date: string;
  }[];
}

export const defaultGymData: GymData = {
  name: "Iraklis Studio",
  tagline: "ΕΞΑΙΡΕΤΙΚΑ ΕΞΟΠΛΙΣΜΕΝΟ ΓΥΜΝΑΣΤΗΡΙΟ ΣΤΑ ΙΩΑΝΝΙΝΑ",
  subtagline: "Σπύρου Λάμπρου 50 · Κορυφαίος εξοπλισμός δύναμης, ελεύθερα βάρη, εξειδικευμένες μηχανές και αυθεντική προπονητική ατμόσφαιρα. Χωρίς περιττούς συμβιβασμούς και η κοινότητα που σε ωθεί να ξεπεράσεις τα όριά σου.",
  phone: "2651 070994",
  phoneRaw: "2651070994",
  address: "Σπύρου Λάμπρου 50",
  city: "Ιωάννινα",
  postalCode: "453 32",
  email: "studioiraklisioa@gmail.com",
  instagram: "https://www.instagram.com/studioiraklis?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/StudioIraklis/",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Σπύρου+Λάμπρου+50+Ιωάννινα",
  hours: [
    { day: "Δευτέρα", dayShort: "Δευ", dayIndex: 1, open: "07:30", close: "23:00", isOpen: true, busyHours: "18:00 - 21:30" },
    { day: "Τρίτη", dayShort: "Τρί", dayIndex: 2, open: "07:30", close: "23:00", isOpen: true, busyHours: "18:00 - 21:30" },
    { day: "Τετάρτη", dayShort: "Τετ", dayIndex: 3, open: "07:30", close: "23:00", isOpen: true, busyHours: "18:00 - 21:30" },
    { day: "Πέμπτη", dayShort: "Πέμ", dayIndex: 4, open: "07:30", close: "23:00", isOpen: true, busyHours: "18:00 - 21:30" },
    { day: "Παρασκευή", dayShort: "Παρ", dayIndex: 5, open: "07:30", close: "23:00", isOpen: true, busyHours: "17:30 - 21:00" },
    { day: "Σάββατο", dayShort: "Σάβ", dayIndex: 6, open: "10:00", close: "14:30", isOpen: true, busyHours: "11:30 - 13:30" },
    { day: "Κυριακή", dayShort: "Κυρ", dayIndex: 0, open: "", close: "", isOpen: false, busyHours: "Κλειστά" },
  ],
  pricing: [
    {
      id: "day-pass",
      title: "Ημερήσια Είσοδος",
      duration: "1 Προπόνηση",
      price: 8,
      description: "Ιδανικό για επισκέπτες στα Ιωάννινα ή για μια δυναμική προπόνηση δοκιμής.",
      features: [
        "Πλήρης πρόσβαση σε όλο τον εξοπλισμό",
        "Χρήση αποδυτηρίων & ντους",
        "Δωρεάν locker για ασφαλή φύλαξη",
        "Χωρίς καμία δέσμευση"
      ]
    },
    {
      id: "monthly",
      title: "Μηνιαία Συνδρομή",
      duration: "1 Μήνας",
      price: 45,
      description: "Ευέλικτη συνδρομή για συνεχή προπόνηση χωρίς μακροχρόνια δέσμευση.",
      features: [
        "Απεριόριστη πρόσβαση όλες τις ώρες",
        "Όλες οι ζώνες (Ελεύθερα βάρη & Μηχανές)",
        "Εισαγωγική καθοδήγηση & πρόγραμμα εκγύμνασης",
        "Χρήση locker & αποδυτηρίων"
      ]
    },
    {
      id: "quarterly",
      title: "3μηνη Συνδρομή",
      duration: "3 Μήνες",
      price: 110,
      popular: true,
      description: "Η πιο δημοφιλής επιλογή για ουσιαστικά αποτελέσματα και εξοικονόμηση.",
      features: [
        "Απεριόριστη πρόσβαση όλες τις ημέρες & ώρες",
        "Εξατομικευμένη προσαρμογή προγράμματος",
        "Έλεγχος προόδου και μετρήσεις δύναμης",
        "Προτεραιότητα σε εξειδικευμένα σεμινάρια τεχνικής"
      ]
    },
    {
      id: "annual",
      title: "Ετήσια Συνδρομή",
      duration: "12 Μήνες",
      price: 330,
      description: "Η μέγιστη αξία και δέσμευση στον αθλητικό σου τρόπο ζωής.",
      features: [
        "Απεριόριστη ετήσια πρόσβαση 365 ημέρες",
        "Δυνατότητα παγώματος συνδρομής (έως 30 ημέρες)",
        "Δωρεάν προπονητικό shaker & μπλουζάκι Iraklis",
        "2 Δωρεάν προσκλήσεις φίλων (Day Passes)"
      ]
    }
  ],
  equipmentCategories: [
    {
      id: "free-weights",
      title: "Ελεύθερα Βάρη & Power Racks",
      description: "Βαρέως τύπου power cages, calibrated αγωνιστικοί δίσκοι, πλατφόρμες άρσεων θανάτου και knurled ολυμπιακές μπάρες.",
      items: [
        "4 Heavy-Duty Power Racks με safety pins",
        "Αλτήρες σε ζεύγη από 2kg έως 60kg",
        "Ολυμπιακές μπάρες 20kg (Texas Power Bars, Deadlift Bars)",
        "Αντικραδασμικές πλατφόρμες για Deadlifts & Power Cleans",
        "Calibrated ατσάλινοι δίσκοι & bumper plates"
      ]
    },
    {
      id: "cables-leverage",
      title: "Τροχαλίες & Plate-Loaded Μηχανές",
      description: "Κορυφαία βιομηχανική ακρίβεια κίνησης, βαριά selectorized blocks και ρυθμιζόμενοι σταθμοί για μέγιστη απομόνωση.",
      items: [
        "Dual Adjustable Cable Crossover πολλαπλών σημείων",
        "Plate-loaded Hack Squat & 45° Leg Press",
        "Seated Row & Lat Pulldown με βαριά stack βάρη",
        "Chest Press, Incline Press & Shoulder Press μηχανές",
        "Glute Ham Developer (GHD) & Reverse Hyper"
      ]
    },
    {
      id: "conditioning",
      title: "Conditioning & Ειδικός Εξοπλισμός",
      description: "Εξοπλισμός για αθλητική προετοιμασία, αντοχή στη δύναμη και ενεργητική αποκατάσταση.",
      items: [
        "Concept2 RowErg & SkiErg",
        "Assault AirBike για μέγιστη καρδιοαναπνευστική ένταση",
        "Competition Kettlebells από 8kg έως 36kg",
        "Safety Squat Bars (SSB) & Trap Bars (Hex Bars)",
        "Ειδικοί πάγκοι ρυθμιζόμενοι με αντιολισθητική επένδυση"
      ]
    }
  ],
  reviews: [
    {
      name: "",
      role: "",
      rating: 5,
      text: "Τοπ, το καλύτερο γυμναστήριο της πόλης. Απίστευτη υποστήριξη από το προσωπικό και ο Δημήτρης, ο καλύτερος κοουτς, φουλ ενθαρρυντικός. Πρώτη φορά έρχομαι με όρεξη στο γυμναστήριο.",
      date: ""
    },
    {
      name: "",
      role: "",
      rating: 5,
      text: "Εξαιρετικό γυμναστήριο! Καθαρό με όμορφη διακόσμηση. Οι γυμναστές είναι πάντα εκεί να βοηθήσουν!",
      date: ""
    },
    {
      name: "",
      role: "",
      rating: 5,
      text: "Ένα από τα παλαιότερα γυμναστήρια της πόλης χωρίς να διαθέτει παλιά όργανα! Οι γυμναστές είναι καταρτισμένοι και πάντα πρόθυμοι να βοηθήσουν και να σε παρακολουθήσουν κατά την εκτέλεση των ασκήσεων.",
      date: ""
    }
  ]
};
