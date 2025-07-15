// This file provides a global type definition for the Calendly object
// that is added to the window by their external script.

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

// This export statement is needed to make the file a module
// and to allow the global declaration to be recognized.
export {};
