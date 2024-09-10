class EntityNotFoundError extends Error {
    constructor(entityType, entityId) {
        const message = `Entity ${entityType} with ID = ${entityId} not found`;
        super(message);

        this.entityType = entityType;
        this.entityId = entityId;

        this.name = 'EntityNotFoundError';
    }

    // ...
}

// // mock
// function getPersonFromDatabase(id) {
//     return null;
// }

// try {
//     const person = getPersonFromDatabase(42);
//     if (person === null) {
//         throw new EntityNotFoundError('Person', 42);
//     }
// } catch (e) {
//     console.log(e.message);
//     console.log(e.name);
//     console.log(e instanceof EntityNotFoundError);
//     console.log(e instanceof Error);
// }
