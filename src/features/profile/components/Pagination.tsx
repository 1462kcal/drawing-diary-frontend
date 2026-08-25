interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 14,
        marginTop: 40,
      }}
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => onChange(page)}
            style={{
              width: 30,
              height: 30,
              border: "none",
              borderRadius: 4,
              background: currentPage === page ? "#222" : "transparent",
              color: currentPage === page ? "#fff" : "#222",
              cursor: "pointer",
            }}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
      >
        ›
      </button>
    </div>
  );
}
