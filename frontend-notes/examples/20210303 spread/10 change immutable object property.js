// изменение иммутабельных объектов путём создания
// изменённой копии
const original = {
    someProperty: "oldValue",
    someOtherProperty: 42
};
const updated = { ...original, someProperty: "newValue" };
console.log(updated);