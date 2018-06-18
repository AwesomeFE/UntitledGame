export const UtilImage = {
  fetchImage(src: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if(src) {
        const image = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        image.onload = event => {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);

          canvas.toBlob
            ? canvas.toBlob(blob => resolve(URL.createObjectURL(blob)))
            : resolve(URL.createObjectURL(canvas.msToBlob()));
        };
        image.onerror = event => reject(event);
    
        image.src = src;
      } else {
        resolve();
      }
    });
  }
}