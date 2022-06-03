module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    listStyleType: {
      disc: 'disc',
      decimal: 'decimal',
      alpha_small: 'lower-alpha',
      alpha_big: 'upper-alpha',
    },
    extend: {
      colors: {
        hitam: '#1D1D1E',
        hitam_2: '#3C3C3B',
        abu: '#6A6C73',
        abu_f2: '#F2F2F2',
        abu_ea: "#EAEAEA",
        abu_eo: "#EOEOEO",
        abu_adad: "#ADADAD",
        abu_86: "#868686",
        abu_c7: "#C7C7C7",
        abut_mobile_bg: "#F5F6F8",
        gradasi_hitam: 'linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.91) 37.41%, #000000 100%)',
        hijau_hutan: '#4AA82D',
        hijau_muda: '#69AC52',
        hijau_tua: '#33711F',
        hijau_kristal: '#AADC9B',
        hijau_notif: '#ebffef',
        hijau_misty: '#108775',
        british_green_racing: '#468531',
        hijau_soft: '#F9FDF8',
        pink_kuning: '#FAFAFF',
        hijau_mint: 'rgba(180, 255, 157, 0.1);',
        hijau_pudar: '#F8FBFA',
        hijau_muda_pudar: '#F4F9F8',
        hijau_kabut: "#EDFFE8",
        kuning_notif: '#FFEEB1',
        oranye: "#FF8A00",
        biru_muda: "#1189f7",
        biru_tua: "#4D8AF0",
      },
      fontFamily: {
        quicksand: ["Quicksand"], // ! find out why this fontFamily still not register to the styles.css inside the public -o output folder.
        poppins: ["Poppins"], // ! find out why this fontFamily still not register to the styles.css inside the public -o output folder.
      },
      width: {
        bar_notification: '400px',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        fileHeight: '331px',
        modalmax: '40rem',
        view_card: '640px',
      },
      screens: {
        fhd: '1920px',
      },
      maxHeight: {
        'modalmax_payment_fiat': '90vh',
        'modalmax': '40rem',
        'modal_terms': '68vh',
      },
      minHeight: {
        'almost_full': '90vh',
        'content-utiliti': '70vh',
      },
      minWidth: {
        'almost_full': '60vw',
      }
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}
