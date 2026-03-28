const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:3001",
];

const corsConfig = {
  // allowedHeaders: "X-Requested-With, Content-Type, Accept",
  //   credentials: true,
  allowedHeaders: ["Content-Type", "X-Requested-With", "Accept"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  // httpOnly: true,
  // sameSite: "lax",
  // secure: false,
  //
  // origin: "*",
  /**  this makes cookie save in browser */
  credentials: true,
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsConfig;
