let feedback = "Great product! Fast delivery and amazing sound quality.";

let wordCount = feedback.trim().split(/\s+/).length;
let lowerFeedback = feedback.toLowerCase();

console.log(`Word Count: ${wordCount}`);

if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}