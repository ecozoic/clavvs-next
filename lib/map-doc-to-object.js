const mapDocToObject = doc => ({ id: doc.id, ...doc.data() });

export default mapDocToObject;
