import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(currentPage - halfVisible, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const renderPageButton = (pageNum: number | string, icon?: React.ReactNode) => (
    <TouchableOpacity
      key={pageNum}
      className={`w-10 h-10 justify-center items-center rounded-md mx-0.5
        ${pageNum === currentPage ? 'bg-[#007DFE]' : 'bg-transparent'}`}
      onPress={() => typeof pageNum === 'number' && onPageChange(pageNum)}
      disabled={typeof pageNum !== 'number'}
    >
      {icon ? (
        icon
      ) : (
        <Text
          className={`text-lg font-bold
            ${pageNum === currentPage ? 'text-white' : 'text-[#007DFE]'}`}
        >
          {pageNum}
        </Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View className="flex-row items-center justify-center my-4">
      {renderPageButton(
        currentPage > 1 ? currentPage - 1 : '...',
        <Ionicons name="chevron-back" size={20} color={currentPage === 1 ? '#9CA3AF' : '#007DFE'} />
      )}
      {getPageNumbers().map((pageNum) => renderPageButton(pageNum))}
      {renderPageButton(
        currentPage < totalPages ? currentPage + 1 : '...',
        <Ionicons name="chevron-forward" size={20} color={currentPage === totalPages ? '#9CA3AF' : '#007DFE'} />
      )}
    </View>
  );
};

export default Pagination;