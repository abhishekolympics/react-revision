export const logger = (storeAPI) => (next) => (action) => {
    if( process.env.NODE_ENV === 'production') return next(action);
    console.groupCollapsed(`[logger] action: ${action.type}`);
    console.log(`prev state:`, storeAPI.getState());
    console.log(`action payload:`, action.payload);
    const result = next(action);
    console.log('next state:', storeAPI.getState());
    console.groupEnd();
    return result;
};