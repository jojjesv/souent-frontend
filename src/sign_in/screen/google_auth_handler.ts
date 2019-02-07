(window as any).googleSignedIn = false;

(window as any).onGoogleSignedInListeners = new Set<(googleuser: any) => void>();

function onGoogleSignedIn(googleuser){
  console.log("SIGNED IN ", googleuser);
  (window as any).googleSignedIn = true;
  (window as any).onGoogleSignedInListeners.forEach(e => e(googleuser));
}

(window as any).onGoogleSignedIn = onGoogleSignedIn;