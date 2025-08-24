declare global {
  interface Window {
    daum?: {
      Postcode: new (options: {
        oncomplete: (data: DaumPostcode.Address) => void;
        onclose?: () => void;
      }) => {
        open: () => void;
        embed?: (el: HTMLElement) => void;
      };
    };
  }

  interface Address {
    zonecode: string;
    address: string;
    roadAddress: string;
    jibunAddress: string;
    addressType: "R" | "J";
    buildingName?: string;
    bname?: string;
    apartment?: "Y" | "N";
  }
}
export {};
