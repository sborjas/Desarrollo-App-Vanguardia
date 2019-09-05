// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    GET_ITEMS: "GET_ITEMS",
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
    CREATE_STUDENT: "CREATE_STUDENT",
    CREATE_CLASS: "CREATE_CLASS",
    GET_DATA: "GET_DATA"

  };
  // actions
  const createStudent = (studentName, studentCode)=>({
    type: Types.CREATE_STUDENT,
    sName: studentName,
    sCode: studentCode
  })

  const createClass = (className, classCode)=>({
    type: Types.CREATE_CLASS,
    cName: className,
    cCode: classCode
  })

  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const getItems = () => ({
    type: Types.GET_ITEMS
  });

  const getData = () => ({
    type: Types.GET_DATA
  });
  
  export default {
    createItem,
    deleteItem,
    getItems,
    Types,
    createClass,
    createStudent,
    getData

  };