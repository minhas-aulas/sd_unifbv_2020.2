require 'test_helper'

class EnquetesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @enquete = enquetes(:one)
  end

  test "should get index" do
    get enquetes_url, as: :json
    assert_response :success
  end

  test "should create enquete" do
    assert_difference('Enquete.count') do
      post enquetes_url, params: { enquete: { beer: @enquete.beer, milk: @enquete.milk, user_ip: @enquete.user_ip } }, as: :json
    end

    assert_response 201
  end

  test "should show enquete" do
    get enquete_url(@enquete), as: :json
    assert_response :success
  end

  test "should update enquete" do
    patch enquete_url(@enquete), params: { enquete: { beer: @enquete.beer, milk: @enquete.milk, user_ip: @enquete.user_ip } }, as: :json
    assert_response 200
  end

  test "should destroy enquete" do
    assert_difference('Enquete.count', -1) do
      delete enquete_url(@enquete), as: :json
    end

    assert_response 204
  end
end
