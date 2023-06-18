type PaginationProps = {
  data: {
    page: number;
    totalPages: number;
    total: number;
  };
  onPageChange: (page: number) => void;
};

function Pagination(props: PaginationProps) {
  const { data, onPageChange } = props;
  const { page, totalPages } = data;
  return (
    <div className="my-10 flex items-center justify-center">
      <div className="join">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={`page-${p}-of-${totalPages}`}
            className={`join-item btn ${page === p ? "bg-primary" : ""}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
