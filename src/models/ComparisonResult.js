const mongoose = require("mongoose");

// the schema for ComparisonResult
const comparisonResultSchema = new mongoose.Schema({
  provider1: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  provider2: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  cheapestProvider: {
    type: String,
    required: true,
  },
});

// Create the ComparisonResult model
const ComparisonResult = mongoose.model(
  "ComparisonResult",
  comparisonResultSchema
);

module.exports = ComparisonResult;
