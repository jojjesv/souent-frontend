(window as any).onGoogleSignedInListeners = new Set<(googleuser: any) => void>();

function onGoogleSignedIn(googleuser){
  (window as any).onGoogleSignedInListeners.forEach(e => e(googleuser));
}

(window as any).onGoogleSignedIn = onGoogleSignedIn;