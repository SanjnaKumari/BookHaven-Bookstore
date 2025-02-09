package business.book;

import business.BookstoreDbException;
import business.JdbcUtils;
import business.category.Category;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import business.BookstoreDbException.BookstoreQueryDbException;

public class BookDaoJdbc implements BookDao {


    private static final String FIND_BY_BOOK_ID_SQL =
            "SELECT book_id, title, author, description, price, rating, is_public, is_featured, category_id " +
                    "FROM book " +
                    "WHERE book_id = ?";

    private static final String FIND_BY_CATEGORY_ID_SQL =
            "SELECT book_id, title, author, description, price, rating, is_public, is_featured, category_id " +
                    "FROM book " +
                    "WHERE category_id = ?";



    private static final String FIND_RANDOM_BY_CATEGORY_ID_SQL =
            "SELECT book_id, title, author, description, price, rating, is_public, is_featured, category_id " +
                    "FROM book " +
                    "WHERE category_id = ? " +
                    "ORDER BY RAND() " +
                    "LIMIT ?";

    private static final String FIND_BY_CATEGORY_NAME_SQL =
            "SELECT b.book_id, b.title, b.author, b.description,b.price, b.rating,b.is_public, b.is_featured,b.category_id " +
                    "FROM book b " +
                    "JOIN category c ON b.category_id = c.category_id " +
                    "WHERE c.name = ?";

    private static final String FIND_RANDOM_BY_CATEGORY_NAME_SQL =
            "SELECT b.book_id, b.title, b.author, b.description,b.price, b.rating,b.is_public, b.is_featured,b.category_id " +
                    "FROM book b " +
                    "JOIN category c ON b.category_id = c.category_id " +
                    "WHERE c.name = ?" +
                    "ORDER BY RAND() " +
                    "LIMIT ?";


    @Override
    public Book findByBookId(long bookId) {
        Book book = null;
        try (Connection connection = JdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(FIND_BY_BOOK_ID_SQL)) {
            statement.setLong(1, bookId);
            try (ResultSet resultSet = statement.executeQuery()) {
                if (resultSet.next()) {
                    book = readBook(resultSet);
                }
            }
        } catch (SQLException e) {
            throw new BookstoreQueryDbException("Encountered a problem finding book " + bookId, e);
        }
        return book;
    }

    @Override
    public List<Book> findByCategoryId(long categoryId) {
        List<Book> books = new ArrayList<>();

        // TODO: Implement this method.
        try (Connection connection = JdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(FIND_BY_CATEGORY_ID_SQL)) {
            statement.setLong(1, categoryId);
            try (ResultSet resultSet = statement.executeQuery()) {
                while(resultSet.next()) {
                    books.add(readBook(resultSet));
                }
            }
        } catch (SQLException e) {
            throw new BookstoreQueryDbException("Encountered a problem finding books in category " + categoryId, e);
        }

        return books;
    }

    @Override
    public List<Book> findRandomByCategoryId(long categoryId, int limit) {
        List<Book> books = new ArrayList<>();

        // TODO Implement this method
        try (Connection connection = JdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(FIND_RANDOM_BY_CATEGORY_ID_SQL)) {
            statement.setLong(1, categoryId);
            statement.setInt(2, limit);
            try (ResultSet resultSet = statement.executeQuery()) {
                while(resultSet.next()) {
                    books.add(readBook(resultSet));
                }
            }
        } catch (SQLException e) {
            throw new BookstoreQueryDbException("Encountered a problem finding random books in category " + categoryId, e);
        }




        return books;
    }

    @Override
    public List<Book> findByCategoryName(String categoryName) {
        List<Book> books = new ArrayList<>();

        // TODO: Implement this method.
        try (Connection connection = JdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(FIND_BY_CATEGORY_NAME_SQL)) {
            statement.setString(1, categoryName);
            try (ResultSet resultSet = statement.executeQuery()) {
                while(resultSet.next()) {
                    books.add(readBook(resultSet));
                }
            }
        } catch (SQLException e) {
            throw new BookstoreQueryDbException("Encountered a problem finding books in category name " + categoryName, e);
        }

        return books;
    }

    @Override
    public List<Book> findRandomByCategoryName(String categoryName, int limit) {
        List<Book> books = new ArrayList<>();

        // TODO Implement this method
        try (Connection connection = JdbcUtils.getConnection();
             PreparedStatement statement = connection.prepareStatement(FIND_RANDOM_BY_CATEGORY_NAME_SQL)) {
            statement.setString(1, categoryName);
            statement.setInt(2, limit);
            try (ResultSet resultSet = statement.executeQuery()) {
                while(resultSet.next()) {
                    books.add(readBook(resultSet));
                }
            }
        } catch (SQLException e) {
            throw new BookstoreQueryDbException("Encountered a problem finding random books in category " + categoryName, e);
        }




        return books;
    }


    private Book readBook(ResultSet resultSet) throws SQLException {
        // TODO add description, isFeatured, rating to Book results
        long bookId = resultSet.getLong("book_id");
        String title = resultSet.getString("title");
        String author = resultSet.getString("author");
        String description = resultSet.getString("description");
        int price = resultSet.getInt("price");
        int rating = resultSet.getInt("rating");
        boolean isPublic = resultSet.getBoolean("is_public");
        boolean isFeatured = resultSet.getBoolean("is_featured");
        long categoryId = resultSet.getLong("category_id");
        return new Book(bookId, title, author, description, price, rating, isPublic, isFeatured, categoryId);
    }
}
