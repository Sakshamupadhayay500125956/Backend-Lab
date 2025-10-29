const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    index: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

todoSchema.virtual('status').get(function () {
  return this.completed ? "Done ✅" : "Pending ⏳";
});

todoSchema.pre('save', function (next) {
  console.log(`🟢 Saving new Todo: "${this.task}"`);
  next();
});

todoSchema.post('save', function (doc, next) {
  console.log(`✅ Todo Saved: ${doc.task}`);
  next();
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
