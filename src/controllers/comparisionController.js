const provider1Service = require("../services/provider1Service");
const provider2Service = require("../services/provider2Service");
const comparisionService = require("../services/tripComparisionServices");
const ComparisonResult = require("../models/ComparisonResult");

exports.getComparison = async (req, res) => {
  try {
    // Retrieve data from provider services
    const provider1Data = await provider1Service.fetchDataFromProvider1();
    const provider2Data = await provider2Service.fetchDataFromProvider2();

    // Compare prices and determine the cheapest provider
    const cheapestProvider = comparisionService.comparePrices(
      provider1Data,
      provider2Data
    );

    // Save the comparison result to the database
    const comparisonResult = new ComparisonResult({
      provider1: provider1Data,
      provider2: provider2Data,
      cheapestProvider,
    });
    await comparisonResult.save();

    // Return data from both providers
    res.status(200).json({
      provider1: provider1Data,
      provider2: provider2Data,
    });
  } catch (error) {
    console.error("Error getting comparison:", error);
    res.status(500).send("Internal Server Error");
  }
};
