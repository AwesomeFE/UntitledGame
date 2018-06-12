export const UtilImage = {
  fetchImage(src: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if(src) {
        const image = new Image();
  
        image.onload = event => {
          resolve(URL.createObjectURL(image));
        };
        image.onerror = event => reject(event);
    
        image.src = src;
      } else {
        resolve();
      }
    });
  }
}