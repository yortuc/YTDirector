export const PLAYER_READY = "PLAYER_READY";
export const PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED"

export function playerReady() {
	console.log("playerReady");
	return {
		type: PLAYER_READY
	}
}

export function playerStateChanged(playerState) {
	console.log("playerStateChanged", playerState);
	return {
 		type: PLAYER_STATE_CHANGED,
 		payload: playerState
	} 
}