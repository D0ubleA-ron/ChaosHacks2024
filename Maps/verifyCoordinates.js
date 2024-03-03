export const verifyCoordinates = (userLat, userLong, actionLat, actionLong) => {
    const earthRadius = 6371000; // meters
    const toRadians = (angle) => angle * (Math.PI / 180);

    const deltaLat = toRadians(actionLat - userLat);
    const deltaLong = toRadians(actionLong - userLong);

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +Math.cos(toRadians(userLat)) * Math.cos(toRadians(actionLat)) * Math.sin(deltaLong / 2) * Math.sin(deltaLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance<=100;
};
