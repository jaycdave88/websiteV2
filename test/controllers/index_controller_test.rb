require 'test_helper'

class IndexControllerTest < ActionDispatch::IntegrationTest
  test "should get root" do
    get index_root_url
    assert_response :success
  end

end
