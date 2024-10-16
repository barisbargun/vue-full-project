export type Campaign ={
  id: string;
  title: string;
  desc: string;
  img: string;
  type:'vehicle' | 'plane'
  transactionDate: {
    start: string;
    end: string;
  }
  rentDate: {
    start: string;
    end: string;
  }
  conditions: {
    main: string[];
    other: string[];
  }
}