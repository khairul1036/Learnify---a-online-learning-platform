"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AddModules = () => {
  const [modules, setModules] = useState([]);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newTopicTitle, setNewTopicTitle] = useState("");
  const [lessonDetails, setLessonDetails] = useState({
    title: "",
    videoUrl: "",
    time: "",
    paid: false,
    editing: false,
    editingModuleIndex: null,
    editingTopicIndex: null,
    editingLessonIndex: null,
  });
  const [showAddTopic, setShowAddTopic] = useState([]);
  const [editModuleTitle, setEditModuleTitle] = useState({ index: null, value: "" });
  const [editTopicTitle, setEditTopicTitle] = useState({ index: null, moduleIndex: null, value: "" });

  // Add Module
  const handleAddModule = () => {
    if (!newModuleTitle.trim()) {
      alert("Please enter a module title");
      return;
    }
    setModules([...modules, { title: newModuleTitle, topics: [] }]);
    setShowAddTopic([...showAddTopic, false]);
    setNewModuleTitle("");
  };

  // Edit Module Title
  const handleEditModule = (moduleIndex) => {
    setEditModuleTitle({ index: moduleIndex, value: modules[moduleIndex].title });
  };

  const handleUpdateModule = (moduleIndex) => {
    if (!editModuleTitle.value.trim()) {
      alert("Module title cannot be empty");
      return;
    }
    const updatedModules = [...modules];
    updatedModules[moduleIndex].title = editModuleTitle.value;
    setModules(updatedModules);
    setEditModuleTitle({ index: null, value: "" });
  };

  // Delete Module
  const handleDeleteModule = (moduleIndex) => {
    if (!window.confirm("Are you sure you want to delete this module and all its contents?")) return;
    const updatedModules = modules.filter((_, i) => i !== moduleIndex);
    setModules(updatedModules);
    const updatedShowAddTopic = showAddTopic.filter((_, i) => i !== moduleIndex);
    setShowAddTopic(updatedShowAddTopic);
  };

  // Toggle Add Topic visibility
  const toggleAddTopic = (moduleIndex) => {
    const updatedShowAddTopic = [...showAddTopic];
    updatedShowAddTopic[moduleIndex] = !showAddTopic[moduleIndex];
    setShowAddTopic(updatedShowAddTopic);
    setNewTopicTitle("");
  };

  // Add Topic
  const handleAddTopic = (moduleIndex) => {
    if (!newTopicTitle.trim()) {
      alert("Please enter a topic title");
      return;
    }
    const updatedModules = [...modules];
    updatedModules[moduleIndex].topics.push({ title: newTopicTitle, lessons: [], expanded: false });
    setModules(updatedModules);
    setNewTopicTitle("");
    const updatedShowAddTopic = [...showAddTopic];
    updatedShowAddTopic[moduleIndex] = false;
    setShowAddTopic(updatedShowAddTopic);
  };

  // Edit Topic Title
  const handleEditTopic = (moduleIndex, topicIndex) => {
    setEditTopicTitle({ moduleIndex, index: topicIndex, value: modules[moduleIndex].topics[topicIndex].title });
  };

  const handleUpdateTopic = (moduleIndex, topicIndex) => {
    if (!editTopicTitle.value.trim()) {
      alert("Topic title cannot be empty");
      return;
    }
    const updatedModules = [...modules];
    updatedModules[moduleIndex].topics[topicIndex].title = editTopicTitle.value;
    setModules(updatedModules);
    setEditTopicTitle({ index: null, moduleIndex: null, value: "" });
  };

  // Delete Topic
  const handleDeleteTopic = (moduleIndex, topicIndex) => {
    if (!window.confirm("Are you sure you want to delete this topic and all its lessons?")) return;
    const updatedModules = [...modules];
    updatedModules[moduleIndex].topics.splice(topicIndex, 1);
    setModules(updatedModules);
  };

  // Toggle Topic Expansion
  const toggleTopicExpansion = (moduleIndex, topicIndex) => {
    const updatedModules = [...modules];
    updatedModules[moduleIndex].topics[topicIndex].expanded = 
      !updatedModules[moduleIndex].topics[topicIndex].expanded;
    setModules(updatedModules);
  };

  // Lesson Handlers
  const handleAddLesson = (moduleIndex, topicIndex) => {
    if (!lessonDetails.title.trim() || !lessonDetails.videoUrl.trim() || !lessonDetails.time.trim()) {
      alert("Please fill all lesson fields");
      return;
    }
    const updatedModules = [...modules];
    updatedModules[moduleIndex].topics[topicIndex].lessons.push({ 
      title: lessonDetails.title,
      videoUrl: lessonDetails.videoUrl,
      time: lessonDetails.time,
      paid: lessonDetails.paid
    });
    setModules(updatedModules);
    setLessonDetails({ 
      ...lessonDetails, 
      title: "", 
      videoUrl: "", 
      time: "", 
      paid: false 
    });
  };

  const handleEditLesson = (moduleIndex, topicIndex, lessonIndex) => {
    const lesson = modules[moduleIndex].topics[topicIndex].lessons[lessonIndex];
    setLessonDetails({ 
      ...lesson, 
      editing: true, 
      editingModuleIndex: moduleIndex, 
      editingTopicIndex: topicIndex, 
      editingLessonIndex: lessonIndex 
    });
  };

  const handleUpdateLesson = () => {
    const { editingModuleIndex, editingTopicIndex, editingLessonIndex } = lessonDetails;
    if (!lessonDetails.title.trim() || !lessonDetails.videoUrl.trim() || !lessonDetails.time.trim()) {
      alert("Please fill all lesson fields");
      return;
    }
    
    const updatedModules = [...modules];
    updatedModules[editingModuleIndex].topics[editingTopicIndex].lessons[editingLessonIndex] = {
      title: lessonDetails.title,
      videoUrl: lessonDetails.videoUrl,
      time: lessonDetails.time,
      paid: lessonDetails.paid,
    };
    setModules(updatedModules);
    setLessonDetails({ 
      ...lessonDetails, 
      title: "", 
      videoUrl: "", 
      time: "", 
      paid: false, 
      editing: false, 
      editingModuleIndex: null, 
      editingTopicIndex: null, 
      editingLessonIndex: null 
    });
  };

  const handleDeleteLesson = (moduleIndex, topicIndex, lessonIndex) => {
    if (!window.confirm("Are you sure you want to delete this lesson?")) return;
    const updatedModules = [...modules];
    updatedModules[moduleIndex].topics[topicIndex].lessons.splice(lessonIndex, 1);
    setModules(updatedModules);
  };

  const handleSave = () => {
    console.log("Saved data:", JSON.stringify(modules, null, 2));
    alert("Course structure saved successfully!");
  };

  return (
    <div className="">
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">Course Module Builder</h1> */}
      
      {/* Add Module Section */}
      <div className="mb-6 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Add New Module</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Module Title"
            value={newModuleTitle}
            onChange={(e) => setNewModuleTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddModule()}
          />
          <button
            onClick={handleAddModule}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            Add Module
          </button>
        </div>
      </div>

      {/* Display Modules */}
      {modules.length === 0 ? (
        <div className="text-center py-8 rounded-lg">
          <p className="text-gray-500">No modules added yet. Start by adding your first module above.</p>
        </div>
      ) : (
        modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="mb-6 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {editModuleTitle.index === moduleIndex ? (
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <input
                    type="text"
                    value={editModuleTitle.value}
                    onChange={(e) => setEditModuleTitle({ ...editModuleTitle, value: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onKeyDown={(e) => e.key === 'Enter' && handleUpdateModule(moduleIndex)}
                  />
                  <button
                    onClick={() => handleUpdateModule(moduleIndex)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                  >
                    Update
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditModule(moduleIndex)}
                      className="text-yellow-600 hover:text-yellow-800 font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteModule(moduleIndex)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => toggleAddTopic(moduleIndex)}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      {showAddTopic[moduleIndex] ? "Cancel" : "Add Topic"}
                    </button>
                  </div>
                </>
              )}
            </div>

            {showAddTopic[moduleIndex] && (
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Enter Topic Title"
                    value={newTopicTitle}
                    onChange={(e) => setNewTopicTitle(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    onKeyDown={(e) => e.key === 'Enter' && handleAddTopic(moduleIndex)}
                  />
                  <button
                    onClick={() => handleAddTopic(moduleIndex)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto"
                  >
                    Add Topic
                  </button>
                </div>
              </div>
            )}

            {/* Topics */}
            {module.topics.map((topic, topicIndex) => (
              <div key={topicIndex} className="mt-4 border-t border-gray-200 pt-4">
                <div 
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer" 
                  onClick={() => toggleTopicExpansion(moduleIndex, topicIndex)}
                >
                  {editTopicTitle.moduleIndex === moduleIndex && editTopicTitle.index === topicIndex ? (
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <input
                        type="text"
                        value={editTopicTitle.value}
                        onChange={(e) => setEditTopicTitle({ ...editTopicTitle, value: e.target.value })}
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        onKeyDown={(e) => e.key === 'Enter' && handleUpdateTopic(moduleIndex, topicIndex)}
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateTopic(moduleIndex, topicIndex);
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                      >
                        Update
                      </button>
                    </div>
                  ) : (
                    <>
                      <h4 className="text-lg font-semibold text-gray-700">{topic.title}</h4>
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditTopic(moduleIndex, topicIndex);
                          }}
                          className="text-yellow-600 hover:text-yellow-800 font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteTopic(moduleIndex, topicIndex);
                          }}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Delete
                        </button>
                        <span>{topic.expanded ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${topic.expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  {topic.expanded && (
                    <div className="mt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="Lesson Title"
                          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={lessonDetails.title}
                          onChange={(e) => setLessonDetails({ ...lessonDetails, title: e.target.value })}
                        />
                        <input
                          type="url"
                          placeholder="Video URL"
                          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={lessonDetails.videoUrl}
                          onChange={(e) => setLessonDetails({ ...lessonDetails, videoUrl: e.target.value })}
                        />
                        <input
                          type="text"
                          placeholder="Duration (e.g., 10:30)"
                          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={lessonDetails.time}
                          onChange={(e) => setLessonDetails({ ...lessonDetails, time: e.target.value })}
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                        <label className="flex items-center text-sm text-gray-600">
                          <input
                            type="checkbox"
                            checked={lessonDetails.paid}
                            onChange={() => setLessonDetails({ ...lessonDetails, paid: !lessonDetails.paid })}
                            className="mr-2 h-4 w-4 text-indigo-600"
                          />
                          Paid Lesson
                        </label>
                        {lessonDetails.editing ? (
                          <button
                            onClick={handleUpdateLesson}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                          >
                            Update Lesson
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAddLesson(moduleIndex, topicIndex)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                          >
                            Add Lesson
                          </button>
                        )}
                      </div>

                      {/* Display Lessons */}
                      <div className="mt-4 space-y-4">
                        {topic.lessons.length === 0 ? (
                          <p className="text-gray-500 text-center py-4">No lessons added yet</p>
                        ) : (
                          topic.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                              <div>
                                <p className="font-medium text-gray-800">{lesson.title}</p>
                                <p className="text-sm text-gray-600 break-all">{lesson.videoUrl}</p>
                                <p className="text-sm text-gray-600">{lesson.time}</p>
                                <p className={`text-sm ${lesson.paid ? "text-green-600" : "text-gray-600"}`}>
                                  {lesson.paid ? "Paid" : "Free"}
                                </p>
                              </div>
                              <div className="flex gap-2 w-full sm:w-auto">
                                <button
                                  onClick={() => handleEditLesson(moduleIndex, topicIndex, lessonIndex)}
                                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors w-full sm:w-auto"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteLesson(moduleIndex, topicIndex, lessonIndex)}
                                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors w-full sm:w-auto"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))
      )}

      {/* Save Button */}
      {modules.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button 
            onClick={handleSave} 
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Save Course
          </button>
        </div>
      )}
    </div>
  );
};

export default AddModules;